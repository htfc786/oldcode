/*	ɨ�� 
	1.��Ϸ�߼�=>ͨ��2ά���������� 
	2.�û�����
		1 ��ʼ��:��ֵ���ֱ��������� 
		2 ����:�������mine_num����,����2ά����(ע��ȥ������) ��=>-1
		3 ��Ӹ����׵�����:����Ϊ���ĵľŹ�������+1(�׳���) 
		4 ѭ���������̰��� ���ö�Ӧ����
				(1)���¹��λ�� 
				(2)���»��� 
				(3)����¼� 
					x �հ״� 
				(4)�м��¼�
				(5)�Ҽ��¼� 
	
	 
*/ 
#include <stdio.h>
#include <conio.h>
#include <time.h>
#include <windows.h>

// ���� 
#define D_ROW 10    // Ĭ���� x 
#define D_COL 10    // Ĭ���� y  
#define D_MINE_NUM 10    // Ĭ������  
#define D_CURSER_X 0    // Ĭ�Ϲ��λ��x 
#define D_CURSER_Y 0    // Ĭ�Ϲ��λ��y
#define M_ROW 10//40    // ����֧�ֵ������ x 
#define M_COL 10//40    // ����֧�ֵ������ y
#define I_CURSOR ">"    // ���ͼ�� 
 
// ������� 
HANDLE hdl;		    // �����о�� 
short row;    // �� x
short col;    // �� y
short mine_num;    //����
COORD cursor;    //���λ�� 
_Bool is_gameover;    //�Ƿ�gameover 
int testnum = 0;

// ����2ά���� 
// �����ͼ��2ά���� 
// [��][��]	[col][row]	[y][x]	[i][j] 
// ��ͼ��ֵ���� -1=>��  0=>û��  1-8=>�����׵��� 
short map[M_COL][M_ROW] = {
	{0,0,0,0,0,0,0,0,0,0},
	{0,0,0,0,0,0,0,0,0,0},
	{0,0,0,0,0,0,0,0,0,0},
	{0,0,0,0,0,0,0,0,0,0},
	{0,0,0,0,0,0,0,0,0,0},
	{0,0,0,0,0,0,0,0,0,0},
	{0,0,0,0,0,0,0,0,0,0},
	{0,0,0,0,0,0,0,0,0,0},
	{0,0,0,0,0,0,0,0,0,0},
	{0,0,0,0,0,0,0,0,0,0},		
};    // �洢��ͼ->2ά����  ������ʱд��������֧�ֵ����ֵ 
// ��ͼ״̬��ֵ���� 0=>û�д� 1=>�� 2=>������ 3=>���ʺ� 
short map_type[M_COL][M_ROW];     // �洢��ͼ״̬->2ά����  ������ʱд��������֧�ֵ����ֵ 

// ���ֺ��� 
void c_gotoxy(int x,int y); // �����й���ƶ����� 
void initgame();    // ��ֵ���ֱ��� ��ʼ����Ϸ 
void random_mine();    // ��������� ֱ���޸ĵ�ͼ 
void update();     // ���»���
void cursor_update(short x,short y);    // ���¹��λ�� 
void left_event();    // ����¼� 
void middle_event();     // �м��¼� 
void right_event();    // �Ҽ��¼� 
void open_white(short x,short y);    // ����հ׵ط���ը��Ч�� 

int main()
{
	// 1��ʼ��
	system("cls");
	hdl = GetStdHandle(STD_OUTPUT_HANDLE);
	//short map[D_COL][D_ROW];
	initgame();
	
	// 2���� 3��Ӹ����׵�����
	//random_mine(); 
	
	update();
	
	short key; 
	// �����̰��� ���ö�Ӧ����
	while(1){
		if(is_gameover == TRUE){
			update();
			c_gotoxy(0,0);
			printf("gamover");
			c_gotoxy(14,14);
			break;
		}
		while (_kbhit()){	// �������������ڼ�� 
			key = getch();   // ��ȡ����
			//printf("%d",key); 
			switch (key) {
				case 224: case 119: case 97: case 115: case 100: //  244:��������ı�־�� 119:w 97:a 115:s 100:d 
					if(key == 224) key = getch();     //  ����Ǳ�־����ȡ��һ�������ǰ�����Ӧ���� 
					switch (key) {
						case 72: case 119://72:�� 119:w
							cursor_update(cursor.X,cursor.Y-1);
							break;
						case 80: case 115://80:�� 97:a
							cursor_update(cursor.X,cursor.Y+1);
							break;
						case 75: case 97: //75:�� 115:s
							cursor_update(cursor.X-1,cursor.Y);
							break;
						case 77: case 100://77:�� 100:d
							cursor_update(cursor.X+1,cursor.Y);
							break;
					}
					break;
				case 122://z
					left_event();
					//update();
					break;
				case 120://x
					middle_event();
					break;
				case 99://c
					right_event();
					break;
			}
		}
	}
	return 0;
} 
 
void c_gotoxy(int x,int y)  // �����й���ƶ����� 
{
	COORD pos = { x, y };
	SetConsoleCursorPosition(hdl, pos); 
}

void initgame()  // ��ֵ���ֱ��� ��ʼ����Ϸ 
{
	row = D_ROW;  // ��ʹ��Ĭ�����к����� 
	col = D_ROW;
	mine_num = D_MINE_NUM;   
	is_gameover = FALSE;    //gameover��Ϊ���� 
	//for(int i=0;i<row;i++){      // 2ά���鸳ֵ ��ʼ����ֵ0 
	//	for(int j=0;j<col;j++){
	//		map[i][j] = 0; 
	//	}
	//}
	for(int i=0;i<row;i++){ 
		for(int j=0;j<col;j++){
			map_type[i][j] = 0;
		}
	}
	cursor.X = D_CURSER_X;   // ��ʼ�����
	cursor.Y = D_CURSER_Y;
	cursor_update(cursor.X,cursor.Y);
} 

void random_mine() // ��������׺͸����׵��� ֱ���޸ĵ�ͼ 
{
	// 2����
	// ����������� 
	srand((unsigned)time(NULL));  
	// �������mine_num���� 
	for(int i=0;i<mine_num;){	
		short x = rand() % row;  // ���λ�� 
		short y = rand() % col;
		if(map[x][y] != -1){  // �ж�λ���Ƿ�����  
			map[x][y] = -1;  // i��++=>��ѭ�� ���λ������ʱ=>�����һ�� ����ʱ=>i++ 
			i++;
		} 
	}
	// 3��Ӹ����׵�����
	// ��Ӹ����׵�����
	for(int i=0;i<row;i++){    // ����2ά����
		for(int j=0;j<col;j++){
			if(map[i][j] == -1){   // �ж��Ƿ����� 
				for(int x=i-1;x<=i+1;x++){  // ��������Ϊ���ĵ�9���� 
					for(int y=j-1;y<=j+1;y++){
					 	if(map[x][y] != -1){  //�ų��ױ��� 
					 		if(x>=0 && x<row && y>=0 && y<col){  // �ų����Ϸ����� 
							 	map[x][y]++;     
							}
						}
					} 
				} 
			}
		}
	} 
}

void update()	// ���»���  --ls 
{
	c_gotoxy(0,0);
	printf("score:\n");
	for(int i=0;i<row;i++){      // ����2ά����--��ʱ 
	 	for(int j=0;j<col;j++){
	 		if(map_type[i][j] == 0){
	 			printf(" #");
	 		}else if(map_type[i][j] == 2){
				printf(" $");
	 		}else if(map_type[i][j] == 3){
			 	printf(" ?");
			}else if(map[i][j] == 0){
	 			printf("  ");
	 		}else if(map[i][j] == -1){
	 			printf(" @");
	 		}else{
	 			printf(" %d",map[i][j]);
	 		}
	 	}
	 	printf("\n");
	}
	printf("====================\n");
	for(int i=0;i<row;i++){      // ����2ά����--��ʱ 
		for(int j=0;j<col;j++){
			if(map[i][j] == 0){
		 		printf("  ");
		 	}else if(map[i][j] == -1){
		 		printf(" @");
		 	}else{
		 		printf(" %d",map[i][j]);
			}
	 	}
		printf("\n");
	}
	printf("====================\n");
	for(int i=0;i<row;i++){      // ����2ά����--��ʱ 
		for(int j=0;j<col;j++){
		 	printf(" %d",map_type[i][j]);
		}
		printf("\n");
	}
	cursor_update(cursor.X,cursor.Y);
} 

void cursor_update(short x,short y)    // ���¹��λ�� 
{
	if(y >= col) y = 0;     // ���λ�úϷ��� 
	if(y < 0) y = col-1;    // ���Ϸ�����һ�� 
	if(x >= row) x = 0;
	if(x < 0) x = row-1;
	c_gotoxy(cursor.X*2,cursor.Y+1);    // ���ԭ���Ĺ�� *2:�����м�����׵ĵط� 
	printf(" ");
	cursor.X = x;    // �µ�ֵ���½����� 
	cursor.Y = y; 
	c_gotoxy(x*2,y+1);     // ��ӡ�µĹ�� 
	printf(I_CURSOR); 
} 

void left_event()    // ����¼� 
{ 	
	c_gotoxy(40,testnum);
	printf("in left_event:%d %d %d",cursor.X,cursor.Y,map[cursor.X][cursor.Y]); 
	testnum++;
	if(map_type[cursor.X][cursor.Y] == 2 || map_type[cursor.X][cursor.Y] == 3){
		return;
	} else if(map[cursor.X][cursor.Y] == -1){  //������׾�game over 
		map_type[cursor.X][cursor.Y] = 1;
		is_gameover = TRUE; 
	} else if(map[cursor.X][cursor.Y] == 0){
		map_type[cursor.X][cursor.Y] = 1;
		open_white(cursor.X,cursor.Y);
	} else if(map[cursor.X][cursor.Y]>=1 && map[cursor.X][cursor.Y]<=8){
		map_type[cursor.X][cursor.Y] = 1;
	}
	update();
}

void middle_event()    // �м��¼� 
{
	
	for(int i=cursor.X-1;i<=cursor.X+1;i++){  // ��������Ϊ���ĵ�9���� 
		for(int j=cursor.Y-1;j<=cursor.Y+1;j++){
			
		}
	}
}

void right_event()    // �Ҽ��¼� 
{
	if(map_type[cursor.X][cursor.Y] == 0){  //ʲô��û��=>������ 
		map_type[cursor.X][cursor.Y] = 2;
	} else if(map_type[cursor.X][cursor.Y] == 2){  //������=>���ʺ� 
		map_type[cursor.X][cursor.Y] = 3; 
	}  else if(map_type[cursor.X][cursor.Y] == 3){  //���ʺ�=>�Ļ�ʲô��û�� 
		map_type[cursor.X][cursor.Y] = 0; 
	}
	update();
}

void open_white(short x,short y)
{
	if(map[x][y] == 0){
		for(int i=x-1;i<=x+1;i++){  // ��������Ϊ���ĵ�9���� 
			for(int j=y-1;j<=y+1;j++){
				if(i>=0 && i<row && j>=0 && j<col){  // �ų����Ϸ����� 
					if(map_type[i][j] == 0){
						c_gotoxy(40,testnum);
						printf("in open_white:%d %d",i,j); 
						testnum++;
						map_type[i][j] = 1;
						open_white(i,j);
						
					}
				}
			} 
		}
	}
		
} 
