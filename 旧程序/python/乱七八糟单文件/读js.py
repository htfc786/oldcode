import execjs

def get_js():  
    # f = open("D:/WorkSpace/MyWorkSpace/jsdemo/js/des_rsa.js",'r',encoding='UTF-8')  
    f = open("./index.js", 'r', encoding='UTF-8')  
    line = f.readline()  
    htmlstr = ''  
    while line:  
        htmlstr = htmlstr + line  
        line = f.readline()  
    return htmlstr  
   
jsstr = get_js() 
ctx = execjs.compile(jsstr)
print(ctx)
