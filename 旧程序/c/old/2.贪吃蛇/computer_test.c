/*
<!-- 作者：(b站)htfc786   b站主页：https://space.bilibili.com/626519554/ -->
<!-- Author: (Bilibili) htfc786. Bilibili homepage: https://space.bilibili.com/626519554/ -->
*/
#include <stdio.h>
#include <time.h>
#include <windows.h>

// 定义常量 
#define I_WALL_X "-"  // 窗口边框x图标 
#define I_WALL_Y "|"  // 窗口边框y图标 
#define I_SNAKE_HARD "#"  // 蛇头图标 
#define I_SNAKE_BODY "&"  // 蛇身图标 
#define I_APPLE "@"  // 苹果图标 
#define WIDTH 2  //窗口宽 x 
#define HIGHT 25  //窗口高 y 
#define INIT_SIZE 3  // 蛇的初始长度
#define TICK 1  // 游戏一个画面持续时间（毫秒） 
#define TICK_END 60000   // 测试结束时间 
#define GB_X 90  //标至不影响游戏的地方-x
#define GB_Y 4   //标至不影响游戏的地方-y

// 定义变量 
HANDLE hdl;		  // 命令行变量 
int size;         // 蛇的长度 
COORD* body;      // 蛇身体坐标组 
COORD apple;	  // 苹果坐标 
ULONGLONG start;  // 程序开始时间 
ULONGLONG tick_e; // 更新游戏画面时间（在变） 
ULONGLONG tick_end;  // 测试结束时间 
ULONGLONG now;    // 当前时间
int key_type;     // 上下左右按键检测   0：无 1：上 2：下 3：左 4：右
int mx;           // 蛇头x移动方向 
int my;           // 蛇头y移动方向   
boolean is_death; // 蛇是否死亡 

void c_gotoxy(int x,int y){  // 命令行光标移动函数 
	COORD pos = { x, y };
	SetConsoleCursorPosition(hdl, pos); 
}

void g_gotoxy(int x,int y){  // 游戏内的移动函数 
	int x_c = x + 1;
	int y_c = y + 2;
	//printf("     %f %f",x_c,y_c);
	c_gotoxy(x_c,y_c);
}

void init_game(){  // 初始化游戏 
	hdl = GetStdHandle(STD_OUTPUT_HANDLE);
	//CONSOLE_CURSOR_INFO cci = {1,0};
	//SetConsoleCursorInfo(hdl, &cci);
}

void init_snake(){  // 对蛇进行坐标初始化 
	for(int i=0;i<size;i++){	
		body[i].X = (WIDTH / 2)-i;
		body[i].Y = HIGHT / 2;
	}
	is_death = FALSE;
}

void draw_wall(){  // 绘制游戏界面--边框 
	for (int i=1;i < HIGHT+2+2;i++){  // 绘制左边框 
		c_gotoxy(0,i);
		printf(I_WALL_Y);
	} 
	for (int i=1;i < HIGHT+2+1;i++){  // 绘制右边框 
		c_gotoxy(WIDTH+2,i);
		printf(I_WALL_Y);
	} 
	for (int i=0;i < WIDTH+3;i+=1){  // 绘制上边框 
			c_gotoxy(i,1);
			printf(I_WALL_X);
	}
	for (int i=0;i < WIDTH+2+1;i+=1){  // 绘制下边框 
			c_gotoxy(i,HIGHT+2+1);
			printf(I_WALL_X);
	} 
}

void draw_score(){  // 绘制游戏界面--分数 
	int score = size - INIT_SIZE;
	c_gotoxy(0,0);
	printf("SCORE:%d",score); 
}



void draw_snake(){  // 画蛇 
	for(int i=0;i<size;i++){  // 便利蛇 
		int x = body[i].X;
		int y = body[i].Y;
		g_gotoxy(x,y);
		if(i == 0){  // 画头 
			printf(I_SNAKE_HARD);
		} else {  // 画身 
			printf(I_SNAKE_BODY);
		}
	}
}

void remove_snake(){  // 移除蛇 
	for(int i=0;i<=size;i++){  // 便利蛇 
		int x = body[i].X;
		int y = body[i].Y;
		g_gotoxy(x,y); 
		printf(" ");
	}
}

void rand_apple() { // 随机苹果坐标 
	int f = 1;     // 0：跳出循环 1:循环 
	while(f){     // 一直循环，直到生产不与蛇碰撞 
		f = 0;   // 设置成跳出循环
		// 设置随机种子
		srand((unsigned)time(NULL));
		// 随机xy，存入apple数组 
		apple.X = 1 % (WIDTH - 1);   //0;rand()//
		apple.Y = 12 % (HIGHT - 1);   //0;rand()// 
		// 判断如果和蛇碰撞，设置继续循环
		/*
		for(int i=0;i<size;i++){
			int x = body[i].X;
			int y = body[i].Y;
			if (apple.X == x){  // 判断x 
				f = 1;
			} else if(apple.Y == y){  // 判断y 
				f = 1;
			}
		}*/
	}
}

void draw_apple(){  //画苹果 
	// 绘制apple
	g_gotoxy(apple.X,apple.Y);
	printf(I_APPLE);
} 

void remove_apple(){
	g_gotoxy(apple.X,apple.Y);
	printf(" ");
}

int main(){
	// 游戏初始化
	system("cls");
	init_game(); 
	
	// 对蛇进行初始化：在堆区创建蛇数组
	body = (COORD*)malloc(sizeof(COORD) * HIGHT * 80); 
	size = INIT_SIZE;
	init_snake();
	
	// 绘制游戏界面
	draw_wall();
	draw_score(); 
	
	// 对蛇，苹果进行绘制
	draw_snake();
	rand_apple(); 
	draw_apple();
	
	// 对时间进行初始化
	start = GetTickCount64();
	tick_e = start + TICK; 
	tick_end = start + TICK_END; 
	
	while(1){
		//获取当前时间，如果达到一定时间，就移动蛇
			// 按键检测 
			// 对蛇本身进行更改：删除尾巴，向前移动一格
			// 胜负决定，吃苹果判定
			
		now = GetTickCount64(); 
		if(now < tick_end){
			if(now > tick_e){
				remove_snake();  // 移除蛇 
				
				// 蛇的移动 
				mx = 1; // 初始值向右 
				my = 0;
				for(int i=size-1;i>0;i--){   // 赋值蛇身
						body[i] = body[i-1];
				}
				
				body[0].X += mx;  // 根据上面计算x 
				body[0].Y += my;  // 根据上面计算y 
				
				// 判断是否撞墙
				if (body[0].X == 0){
					body[0].X = WIDTH;
				} else if(body[0].X == WIDTH){
					body[0].X = 0;
				} else if(body[0].Y == 0-1){
					body[0].Y = HIGHT;
				} else if(body[0].Y == HIGHT+1){
					body[0].Y = 0;
				}
				
				// 判断蛇是否碰撞到苹果 
				if (body[0].X == apple.X && body[0].Y == apple.Y) {  
					//remove_apple();   // 移除苹果 
					rand_apple(); 	  // 随机新苹果位置 
					size++;           // 增加长度 
					draw_score();     // 更新分数 
				}
				
				draw_snake();     // 画蛇 
				draw_apple();     // 画苹果
				c_gotoxy(GB_X,GB_Y);	  // 移动光标至不影响游戏的地方 
				
				// 增加游戏画面更新时间 
				tick_e += TICK;
			}
		}
		if(now > tick_end){
			break;
		}
	}  
	
	free(body);    // 清理内存 
	system("cls");    // 清屏 
	int score = size - INIT_SIZE;
	printf("SCORE:%d\n",score); 
	//system("pause");    // 按任意退出 
	return 0;
} 
