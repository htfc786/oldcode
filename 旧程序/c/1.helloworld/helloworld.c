#include <stdio.h>

int max(int a,int b); //函数说明 
int main(){    //定义主函数 
	printf("helloworld\n"); 
	
	int x,y,z;  //变量说明 
	int max(int a,int b);  //函数说明 
	printf("input two numbers:\n");
	scanf("%d%d",&x,&y);  //输入x,y值 
	z = max(x,y);  //调用max函数 
	printf("maxmun=%d",z); 
	
	return 0;
}

int max(int a,int b){  //定义max函数 
	if(a > b){        //迷之判断 
		return a;
	} else {
		return b;
	}
}
