def init(app,rootdir):
    import os
    import time
    from flask import Flask ,Response ,render_template

    rootdir = r'D:\\cbx\\python自录课\\mp4'

    @app.route('/pythonxkt/')
    @app.route("/pythonxkt/<subdir>")
    def xkt(subdir=''):
        if subdir == '':
            os.chdir(rootdir)
        else:
            fullname = rootdir + os.sep + subdir
            #  如果是文件，则下载
            if os.path.isfile(fullname):
                image = open(rootdir + '\\' + subdir ,'rb')
                resp = Response(image, mimetype="video/mp4")
                return resp
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
        return render_template('pythonxkt.html', contents=contents, subdir=subdir, ossep=os.sep)

