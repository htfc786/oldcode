import os
from re import sub
import time
from flask import Flask,render_template,url_for,redirect,send_from_directory,request


# 共享文件夹的根目录
rootdir = r'/mnt/'

app = Flask(__name__)




@app.route('/')
@app.route('/file/')
@app.route('/file/<subdir>')
def document(subdir=''):
    #subdir = subdir + "/"
    if subdir == '':
        # 名字为空，切换到根目录
        os.chdir(rootdir)
    else:
        fullname = os.path.join(rootdir,subdir)
        #  如果是文件，则下载
        if os.path.isfile(fullname):
            print(fullname)
            dirpath = os.path.dirname(fullname)
            filename = os.path.basename(fullname)
            return send_from_directory(dirpath, filename, as_attachment=False)
        #  如果是目录，切换到该目录下面
        else:
            os.chdir(fullname)
    current_dir = os.getcwd()
    current_list = os.listdir(current_dir)
    contents = []
    for i in sorted(current_list):
        fullpath = current_dir + os.sep + i
        # 如果是目录，在后面添加一个sep
        if os.path.isdir(fullpath):
            extra = os.sep
        else:
            extra = ''
        content = {}
        content['filename'] = i + extra
        content['mtime'] = time.strftime('%Y-%m-%d %H:%M:%S', time.localtime(os.stat(fullpath).st_mtime))
        content['size'] = str(round(os.path.getsize(fullpath) / 1024)) + 'k'
        contents.append(content)
        print(content)
    print(contents,subdir,os.sep)
    return render_template('file.html', contents=contents, subdir=subdir, ossep=os.sep)

@app.route('/download/<fullname>')
def downloader(fullname):
    dirpath = os.path.dirname(fullname)
    filename = os.path.basename(fullname)
    return send_from_directory(dirpath, filename, as_attachment=False)


@app.route('/upload', methods=['POST', 'GET'])
def upload():
    if request.method == 'POST':
        f = request.files['file']
        upload_path = os.path.join(rootdir,secure_filename(f.filename))  #注意：没有的文件夹一定要先创建，不然会提示没有该路径
        f.save(upload_path)
        return redirect(url_for('upload'))
    return render_template('file-upload.html')


if __name__ == '__main__':
    app.run("0.0.0.0","4000")
