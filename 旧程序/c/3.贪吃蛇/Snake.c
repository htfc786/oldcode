#include <stdio.h>
#include <conio.h>
#include <time.h>
#include <windows.h>

// ���峣��
#define I_WALL "��"  // ���ڱ߿�ͼ�� 
#define I_SNAKE_HARD "#"  // ��ͷͼ�� 
#define I_SNAKE_BODY "&"  // ����ͼ�� 
#define I_APPLE "@"  // ƻ��ͼ�� 
#define MENU_WIDTH 70  //�˵�Ĭ�ϴ��ڿ� x 
#define MENU_HIGHT 20  //�˵�Ĭ�ϴ��ڸ� y 
#define WIDTH 70  //���ڿ� x 
#define HIGHT 20  //���ڸ� y 


// ������� 
HANDLE hdl;		    // �����о�� 
int menu_x;         // �˵��м�λ��x
int menu_y;         // �˵��м�λ��y

// ���ֺ��� 
void c_gotoxy(short x, short y); // �����й���Ƶ�����
void draw_wall(); // �����й���ƶ����� 
void draw_menu_page(); // ���˵�ҳ�溯��
void draw_settings_menu_page(); // ������ҳ�溯��
void update_menu_page(); // ���»���/����˵�ҳ�溯��


int main()
{
	// ��Ϸ��ʼ��
	system("cls");
	hdl = GetStdHandle(STD_OUTPUT_HANDLE);

	update_menu_page();
	

	// ��Ϸ��ʼ
	// ̰���ߣ���ȡ��ǰʱ�䣬����ﵽһ��ʱ�䣬���ƶ���
		// ������� 
		// ���߱�����и��ģ�ɾ��β�ͣ���ǰ�ƶ�һ��
		// ʤ����������ƻ���ж�
	/*while (1) {
		getchar();
	}*/

	c_gotoxy(0, 25);
	printf("hhh");
	return 0;
}

// �����й���ƶ����� 
void c_gotoxy(short x, short y)  
{  
	COORD pos = { x, y };
	SetConsoleCursorPosition(hdl, pos);
}
// ������Ϸ����--�߿� 
void draw_wall()  
{  
	for (int i = 1; i < HIGHT + 2 + 2; i++) 
	{  // ������߿� 
		c_gotoxy(0, i);
		printf(I_WALL);
	}
	for (int i = 1; i < HIGHT + 2 + 1; i++) 
	{  // �����ұ߿� 
		c_gotoxy(WIDTH + 2, i);
		printf(I_WALL);
	}
	for (int i = 0; i < WIDTH + 3; i += 2) 
	{  // �����ϱ߿� 
		c_gotoxy(i, 1);
		printf(I_WALL);
	}
	for (int i = 0; i < WIDTH + 2 + 1; i += 2) 
	{  // �����±߿� 
		c_gotoxy(i, HIGHT + 2 + 1);
		printf(I_WALL);
	}
}
// �����˵�
void draw_menu_page()
{
	c_gotoxy(menu_x-4, menu_y - 4);
	printf(" ̰  ��  �� ");
	c_gotoxy(menu_x, menu_y - 2);
	printf("--����:(bվ)htfc786");
	c_gotoxy(menu_x - 4, menu_y);
	printf("�� �� ģ ʽ");
	c_gotoxy(menu_x - 4, menu_y + 2);
	printf("�� ǽ ģ ʽ");
	c_gotoxy(menu_x - 4, menu_y + 4);
	printf("�� �� ģ ʽ");
	c_gotoxy(menu_x - 4, menu_y + 6);
	printf("�˳�(��esc��)");
	printf("��������");
	c_gotoxy(menu_x - 10, menu_y + 11);
	
	//system("pause");
}
// ������ҳ�溯��
void draw_settings_menu_page() 
{
	c_gotoxy(menu_x - 2, menu_y - 4);
	printf(" ��  �� ");
}
// ���»���/����˵�ҳ�溯��
void update_menu_page()
{	
	//���߿�
	draw_wall();
	//�������ĵ�λ��
	menu_x = MENU_WIDTH / 2;
	menu_y = MENU_HIGHT / 2;

	//draw_settings_menu_page();
	draw_menu_page();
	short key;
	while (1){
		while (_kbhit()) {
			key = getch();   // ��ȡ����
			//printf("%d",key); 
			switch (key) {
			case 224: case 119: case 97: case 115: case 100: //  244:��������ı�־�� 119:w 97:a 115:s 100:d 
				if (key == 224) key = getch();     //  ����Ǳ�־����ȡ��һ�������ǰ�����Ӧ���� 
				switch (key) {
				case 72: case 119://72:�� 119:w
					
					break;
				case 80: case 115://80:�� 97:a
					
					break;
				}
			}
		}
	}
}
