#include <stdio.h>

int main(int argc,char *argv[]) {
	FILE *fp;
	char ch;
	int list[1024] = {0};
	unsigned int pointer = 0;
	
	
    fp = fopen(argv[1],"rt");  // 
	if(fp==NULL){
	    printf("ERROR:Cannot open file \"%s\"!",argv[1]);
	    return 0;
	}
	    
	while(ch!=EOF){
	    ch = fgetc(fp);
	    //printf("%c",ch);
	    if(ch == '<'){
			pointer--;
		}else if(ch == '>'){
			pointer++;
		}else if(ch == '+'){
			list[pointer]++;
		}else if(ch == '-'){
			list[pointer]--;
		}else if(ch == '.'){
			printf("%c",list[pointer]);
		}else if(ch == ','){
			//TODO
		}else if(ch == '['){
			int while_long = 0;
			while(ch != ']'){
				ch = fgetc(fp);
				while_long++;
			}
			char while_string[while_long-1];
			for(int i=0;i<=while_long;i++){
				ch = fgetc(fp);
				printf("%c",ch);
			}
			
		}else if(ch == ']'){
			//TODO
		}
		
	}
	
	fclose(fp);
    return 0;
}

