#include <stdio.h>
#include <conio.h>
#include <time.h>
#include <windows.h>

// 定义常量 
#define WIN_TITLE " 贪吃蛇 --作者:(b站)htfc786"  //命令行窗口标题 
#define GB_X 75  // 标至不影响游戏的地方-x
#define GB_Y 4   // 标至不影响游戏的地方-y
#define GAMEOVER_P_X WIDTH / 2 -5  // gameover输出位置x 
#define GAMEOVER_P_Y HIGHT / 2     // gameover输出位置y 
#define CHOICE_P_X 30  // 选择画面x坐标  
#define CHOICE_P_Y 10  // 选择画面y坐标
#define I_WALL_X "-"  // 窗口边框x图标 
#define I_WALL_Y "|"  // 窗口边框y图标 
#define I_SNAKE_HARD "#"  // 蛇头图标 
#define I_SNAKE_BODY "&"  // 蛇身图标 
#define I_APPLE "@"  // 苹果图标 
#define WIDTH 70  //窗口宽 x 
#define HIGHT 20  //窗口高 y 
#define INIT_SIZE 3  // 蛇的初始长度
#define TICK 200  // 游戏一个画面持续时间（毫秒）

// 定义变量 
HANDLE hdl;		   // 命令行变量 
int size;          // 蛇的长度 
COORD* body;       // 蛇身体坐标组 
COORD apple;	   // 苹果坐标 
ULONGLONG start;   // 程序开始时间 
ULONGLONG tick_e;  // 更新游戏画面时间（在变） 
ULONGLONG now;     // 当前时间
int key_type;      // 上下左右按键检测   0：无 10：退出 1：上 2：下 3：左 4：右
int mx;            // 蛇头x移动方向 
int my;            // 蛇头y移动方向   
boolean is_death;  // 蛇是否死亡 
int state;         // 游戏状态  0：选择游戏 1：游戏中 2：gameover 3.退出 
int difficulty;    // 游戏难度  0：正常模式 1：穿墙模式 2：无敌模式 

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

void get_key(){  // 按键检测，0：无 1：上 2：下 3：左 4：右 
	//int key_type = 0;
	char key;
	
	while (_kbhit()){  // 当按键按下来在检测 
		key = _getch();  // 获取按键
		switch (key) {
			case 'W':case 'w':    // 判断w按键 上 
				key_type = 1;
				break;
			case 'S':case 's':    // 判断s按键 下 
				key_type = 2;
				break;			
			case 'A':case 'a':    // 判断a按键 左 
				key_type = 3;
				break;						
			case 'D':case 'd':    // 判断d按键 右 
				key_type = 4;
				break;	
			case 27:              // 判断esc按键 退出 
				key_type = 10;
				break;
			case 13:              // 判断enter按键
				key_type = 11;
				break;
			case -32:
				key = _getch();
				switch (key) {
					case 72:      // 判断上按键 上 
						key_type = 1;
						break;
					case 80:      // 判断下按键 下 
						key_type = 2;
						break;
					case 75:      // 判断左按键 左 
						key_type = 3;
						break;
					case 77:      // 判断右按键 右 
						key_type = 4;
						break;
				}
		}
	}
}

void init_snake(){  // 对蛇进行坐标初始化 
	for(int i=0;i<size;i++){	
		body[i].X = (WIDTH / 2)-i;
		body[i].Y = HIGHT / 2;
	}
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
		apple.X = rand() % (WIDTH - 1);   //0;rand()//
		apple.Y = rand() % (HIGHT - 1);   //0;rand()// 
		// 判断如果和蛇碰撞或出界，设置继续循环
		for(int i=0;i<size;i++){
			int x = body[i].X;
			int y = body[i].Y;
			//     判断是否和苹果相撞             判断出界       用异或，有一个是真就输出真 
			if ((apple.X == x & apple.Y == y) ^ apple.X < 0 ^ apple.X < WIDTH ^ apple.Y < 0 ^ apple.Y < HIGHT){ 
				f = 1;
			}
		}
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
	hdl = GetStdHandle(STD_OUTPUT_HANDLE);
	CONSOLE_CURSOR_INFO cci;
	cci.dwSize = 1;
	cci.bVisible = 0;
	SetConsoleCursorInfo(hdl, &cci);
	SetConsoleTitle(WIN_TITLE);
	state = 0;
	difficulty = 0;
	
	// 绘制游戏界面
	draw_wall();
	
	while(1){
		if(state == 3){
			break; 
		} else if(state == 0){
			
			// 选择游戏难度
			 
			g_gotoxy(CHOICE_P_X,CHOICE_P_Y-5);
			printf(" 贪  吃  蛇 "); 
			g_gotoxy(CHOICE_P_X+4,CHOICE_P_Y-3);
			printf("--作者:(b站)htfc786");
			g_gotoxy(CHOICE_P_X,CHOICE_P_Y);
			printf("正 常 模 式");
			g_gotoxy(CHOICE_P_X,CHOICE_P_Y+2);
			printf("穿 墙 模 式"); 
			g_gotoxy(CHOICE_P_X,CHOICE_P_Y+4);
			printf("无 敌 模 式");
			g_gotoxy(CHOICE_P_X+4,CHOICE_P_Y+6);
			printf("（按esc按键退出）");
			while(1){
				get_key();
				if(difficulty == 0){
					g_gotoxy(CHOICE_P_X-2,CHOICE_P_Y+2);
					printf(" ");
					g_gotoxy(CHOICE_P_X-2,CHOICE_P_Y+4);
					printf(" ");
					g_gotoxy(CHOICE_P_X-2,CHOICE_P_Y);
					printf(">");
				} else if(difficulty == 1){
					g_gotoxy(CHOICE_P_X-2,CHOICE_P_Y);
					printf(" ");
					g_gotoxy(CHOICE_P_X-2,CHOICE_P_Y+4);
					printf(" ");
					g_gotoxy(CHOICE_P_X-2,CHOICE_P_Y+2);
					printf(">");
				} else if(difficulty == 2){
					g_gotoxy(CHOICE_P_X-2,CHOICE_P_Y);
					printf(" ");
					g_gotoxy(CHOICE_P_X-2,CHOICE_P_Y+2);
					printf(" ");		
					g_gotoxy(CHOICE_P_X-2,CHOICE_P_Y+4);
					printf(">");
				}
				
				if (key_type == 1){         // 向上 
					difficulty -= 1;
					if (difficulty == 0-1){
						difficulty = 2;
					}
					key_type = 0;
				} else if (key_type == 2){  // 向下
					difficulty += 1;
					if (difficulty == 2+1){
						difficulty = 0;
					}
					key_type = 0;
				} else if (key_type == 10){  // esc
					c_gotoxy(GB_X,GB_Y);
					state = 3;
					break;
				} else if (key_type == 11){  // 选择 
					c_gotoxy(GB_X,GB_Y);
					state = 1;
					break;
				}
			}
		} else if(state == 1){
			// 游戏开始 
			// 对蛇进行初始化：在堆区创建蛇数组
			body = (COORD*)malloc(sizeof(COORD) * HIGHT * WIDTH); 
			size = INIT_SIZE;
			is_death = FALSE;
			init_snake();
			rand_apple();
				
			// 对蛇，苹果进行绘制
			system("cls");
			draw_wall();
			draw_snake(); 
			draw_apple();
			draw_score(); 
			
			// 对时间进行初始化
			start = GetTickCount64();
			tick_e = start + TICK; 
			
			while(1){
				//贪吃蛇：获取当前时间，如果达到一定时间，就移动蛇
					// 按键检测 
					// 对蛇本身进行更改：删除尾巴，向前移动一格
					// 胜负决定，吃苹果判定
					
				now = GetTickCount64(); 
				if(now > tick_e){
					get_key();
					remove_snake();  // 移除蛇 
					
					// 蛇的移动 
					mx = 1; // 初始值向右 
					my = 0;
					if (key_type == 1){         // 向上 
						mx = 0;
						my = -1; 
					} else if (key_type == 2){  // 向下
						mx = 0;
						my = 1; 
					} else if (key_type == 3){  // 向左
						mx = -1;
						my = 0;
					} else if (key_type == 4){  // 向右 
						mx = 1;
						my = 0;
					} else if (key_type == 10){  // 提出 
						state = 0;
						key_type = 0; 
						break;
					}
					
					for(int i=size-1;i>0;i--){   // 赋值蛇身
							body[i] = body[i-1];
					}
					
					body[0].X += mx;  // 根据上面计算x 
					body[0].Y += my;  // 根据上面计算y 
					
					// 判断是否撞墙 模式详情0.gameover 1.穿墙 2.穿墙 
					if (body[0].X == 0-1){
						if (difficulty == 0){
							is_death = TRUE;
							state = 2;
						} else if(difficulty == 1 ^ difficulty == 2){
							body[0].X = WIDTH;
						}
					} else if(body[0].X == WIDTH+1){
						if (difficulty == 0){
							is_death = TRUE;
							state = 2;
						} else if(difficulty == 1 ^ difficulty == 2){
							body[0].X = 0;	
						}
					} else if(body[0].Y == 0-1){
						if (difficulty == 0){
							is_death = TRUE;
							state = 2;
						} else if(difficulty == 1 ^ difficulty == 2){
							body[0].Y = HIGHT;				
						}
					} else if(body[0].Y == HIGHT+1){
						if (difficulty == 0){
							is_death = TRUE;
							state = 2;
						} else if(difficulty == 1 ^ difficulty == 2){
							body[0].Y = 0;				
						}
					}
					
					// 判断蛇是否碰到自己
					if (difficulty == 0 ^ difficulty == 1){
						for(int i=1;i<=size;i++){
							if(body[0].X == body[i].X && body[0].Y == body[i].Y){
								is_death = TRUE;
								state = 2;
							}
						}
					} 
					
					// 判断蛇是否出界 如果出界就传送到中心点，重新绘制墙壁和分数（防止变空格） 
					if (body[0].X < 0 ^ body[0].X < WIDTH+1 ^ body[0].Y < 0-1 ^ body[0].Y < HIGHT+1){  //
						body[0].X = WIDTH / 2; 
						body[0].Y = HIGHT / 2;
						draw_wall();
						draw_score();
					}
					
					// 判断蛇是否碰撞到苹果 
					if (body[0].X == apple.X && body[0].Y == apple.Y) {  
						remove_apple();   // 移除苹果 
						rand_apple(); 	  // 随机新苹果位置 
						size++;           // 增加长度 
						draw_score();     // 更新分数 
					}
					
					draw_snake();     // 画蛇 
					draw_apple();     // 画苹果
					
					//c_gotoxy(GB_X,GB_Y);	  // 移动光标至不影响游戏的地方 
					
					tick_e += TICK;  // 增加游戏画面更新时间 
				}
				if(is_death && state == 2){  // 判断是否gameover 
					g_gotoxy(GAMEOVER_P_X,GAMEOVER_P_Y);
					printf("GAME OVER!!");
					g_gotoxy(GAMEOVER_P_X-3,GAMEOVER_P_Y+1);
					system("pause");
					key_type = 0;
					state = 0;
					system("cls");
					draw_wall();
					break;
				}
				//break;
			}  
		}
	}
	
	cci.dwSize = 1;
	cci.bVisible = 1;
	SetConsoleCursorInfo(hdl, &cci);
	g_gotoxy(GAMEOVER_P_X,GAMEOVER_P_Y+8);
	free(body);    // 清理内存 
	system("pause");    // 按任意退出 
	system("cls");    // 清屏 
	return 0;
} 
