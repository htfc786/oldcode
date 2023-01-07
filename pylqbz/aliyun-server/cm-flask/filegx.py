def init(app,rootdir,http_path='/file'):
    import os
    import time
    from flask import Flask,render_template,url_for,redirect,send_from_directory,request
    from werkzeug.utils import secure_filename

    @app.route('%s/'%http_path)
    def file():
        return '<a href="/file/file/">进入网盘</a>'

    @app.route('%s/file/'%http_path)
    @app.route('%s/file/<subdir>/'%http_path)
    def document(subdir=''):
        if subdir == '':
            # 名字为空，切换到根目录
            os.chdir(rootdir)
        else:
            fullname = rootdir + os.sep + subdir
            print(fullname+' | '+os.sep+' | '+subdir)
            #  如果是文件，则下载
            if os.path.isfile(fullname):
                return redirect(url_for('downloader', fullname=fullname))
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
        return render_template('filegx.html', contents=contents, subdir=subdir, ossep=os.sep ,http_path=http_path)

    @app.route('%s/download/<fullname>'%http_path)
    def downloader(fullname):
        filename = fullname.split(os.sep)[-1]
        dirpath = fullname[:-len(filename)]
        return send_from_directory(dirpath, filename, as_attachment=True)


    @app.route('%s/upload'%http_path, methods=['POST', 'GET'])
    def upload():
        if request.method == 'POST':
            f = request.files['file']
            upload_path = os.path.join(rootdir,secure_filename(f.filename))  #注意：没有的文件夹一定要先创建，不然会提示没有该路径
            f.save(upload_path)
            return redirect(url_for('upload'))
        return render_template('filegx-upload.html',path=http_path)

