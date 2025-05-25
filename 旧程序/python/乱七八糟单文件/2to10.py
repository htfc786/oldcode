import sys
def _10to2(num):
    result = ""
    while num != 0:
        result = str(num % 2) + result
        num = num // 2
    return result
    
def _2to10(num):
    result = 0
    for i in range(len(num)):
        if num[len(num) -1 - i] == '1':
            result += (2**i)
        elif num[len(num) -1 - i] == '0':
            result += 0
        else:
            print("not allow!")
            return
    return result

print(_2to10(sys.argv[1]))
