dim a
randomize
a=int(rnd*500)
do
b=inputbox("�¸�0~500֮�����")
b=int(b)
if b<a then
msgbox"С��"
end if
if b>a then
msgbox"����"
end if
if b=a then
msgbox"�¶��ˣ�����"
exit do
end if
loop