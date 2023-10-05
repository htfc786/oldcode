// ×÷Õß BÕ¾ htfc786

#include <stdio.h>
int main(){
	int num = 9;
	
	for(int i=1;i<=num;i++){
		for(int j=1;j<=i;j++){
			printf("%dx%d=%2d ",i,j,i*j);
		}	
		printf("\n");
	}
	
	return 0;
} 
