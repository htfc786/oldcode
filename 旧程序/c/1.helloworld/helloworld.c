#include <stdio.h>

int max(int a,int b); //����˵�� 
int main(){    //���������� 
	printf("helloworld\n"); 
	
	int x,y,z;  //����˵�� 
	int max(int a,int b);  //����˵�� 
	printf("input two numbers:\n");
	scanf("%d%d",&x,&y);  //����x,yֵ 
	z = max(x,y);  //����max���� 
	printf("maxmun=%d",z); 
	
	return 0;
}

int max(int a,int b){  //����max���� 
	if(a > b){        //��֮�ж� 
		return a;
	} else {
		return b;
	}
}
