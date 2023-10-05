#include <stdio.h>

int main(int argc,char *argv[]) {
	FILE *fp;
	char ch;
	
	
    fp = fopen(argv[1],"rt");  // 
	if(fp==NULL){
	    printf("ERROR:Cannot open file \"%s\"!",argv[1]);
	    return 0;
	}
	    
	while(ch!=EOF){
	    ch = fgetc(fp);
	    printf("%c",ch);
	}
	
	fclose(fp);
    return 0;
}
