dim a
randomize
a=int(rnd*500)
do
b=inputbox("猜个0~500之间的数")
b=int(b)
if b<a then
msgbox"小了"
end if
if b>a then
msgbox"大了"
end if
if b=a then
msgbox"猜对了！！！"
exit do
end if
loop