wphost = "http://127.0.0.1:100"
bat_command = ""
bat_command += "chcp 65001\t\n"
for i in range(1,int(1)+2):
    if i<10:
        i = '.00'+str(i)
    elif i<100:
        i = '.0'+str(i)
    else:
        i = "."+str(i)
    bat_command += "powershell (new-object System.Net.WebClient).DownloadFile('{}{}/{}','%Temp%\downloadTemp\{}')\t\n".format(wphost,"",i,i)
bat_command += "echo hello\t\n"
with open("2.bat","w",encoding="UTF-8") as f:
    f.write(bat_command)