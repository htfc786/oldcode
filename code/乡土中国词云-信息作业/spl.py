# 安装jieba wordcloud pyecharts
# https://mirrors.aliyun.com/pypi/simple

import jieba
import wordcloud
from pyecharts.charts import WordCloud, Pie, Bar
from pyecharts import options as opts

def readfile(path):
    with open(path, 'r', encoding='utf-8') as f:
        return f.read()

text = readfile('./text.txt')

### jieba
spl_list = list(jieba.cut(text, cut_all=True))

spl_list = [i for i in spl_list if len(i)>1]

### 词云
wordcloud = wordcloud.WordCloud(
    width=1080,
    height=720,
    # stopwords=['的','是','在','我','了','人了'],
    font_path=".\\simkai.ttf",
    background_color="white").generate(' ; '.join(spl_list))
wordcloud.to_file('中文词云图.jpg')

### 排序
# 过滤词语
stopwords = ['。','，','“','”',' ','：']
res = {}
for word in spl_list:
    if word in stopwords or word[0] in stopwords or len(word)<2:
        continue
    if not word in res:
        res[word] = 0
    res[word] = res[word] + 1

### pyecharts
wordcloud_data = [(word, freq) for word, freq in res.items()]

# 创建词云图表
wordcloud_chart = (
    WordCloud()
    .add("", wordcloud_data, word_size_range=[20, 100])
    .set_global_opts(title_opts=opts.TitleOpts(title="中文词云图"))
)
wordcloud_chart.render("中文词云图.html")

# 基础柱状图
num = 20
bar_chart = (
    Bar()
    .add_xaxis([word for word, freq in sorted(wordcloud_data, key=lambda x: x[1], reverse=True)[:num]])
    .add_yaxis("词频", [freq for word, freq in sorted(wordcloud_data, key=lambda x: x[1], reverse=True)[:num]])
    .reversal_axis()  # 反转 x 轴和 y 轴
    .set_global_opts(
        title_opts=opts.TitleOpts(title="词频条形图"),
        xaxis_opts=opts.AxisOpts(
            name="词频",
            name_location="middle",
            name_gap=30,
            axislabel_opts=opts.LabelOpts(rotate=45),
        ),
        yaxis_opts=opts.AxisOpts(
            name="词",
            name_location="middle",
            name_gap=30,
        ),
    )
)
bar_chart.render("词频条形图.html")


# 去除出现5下次的
wordcloud_data = [(word, freq) for word, freq in res.items() if freq > 5]
# 饼状图
pie_chart = (
    Pie()
    .add("", wordcloud_data)
    .set_global_opts(title_opts=opts.TitleOpts(title="词频饼状图"))
    .set_series_opts(label_opts=opts.LabelOpts(formatter="{b}: {c}"))
)
pie_chart.render("词频饼状图.html")
