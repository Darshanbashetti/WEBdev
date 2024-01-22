a='asdfasd'
b='asasdfasd'
c='asdfasdf'
d='sedaaasdaaaa'

e=''
for i in a,b,c,d:
    e=e+i
x=0
for j in e:
    for k in e:
        if k==j:
            x=x+1
