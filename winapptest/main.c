#include <windows.h>

//��������
static TCHAR szAppName[] = TEXT("������磡"); 

//�ص����� 
LRESULT CALLBACK WndProc(HWND hwnd, UINT Message, WPARAM wParam, LPARAM lParam); 

/* The 'main' function of Win32 GUI programs: this is where execution starts */
int WINAPI WinMain(HINSTANCE hInstance, HINSTANCE hPrevInstance, LPSTR lpCmdLine, int iCmdShow) {
	
	WNDCLASS wndclass;	// 
	HWND hwnd; // ���ھ�� 
	MSG msg; //��Ϣ 
	
	wndclass.style = CS_HREDRAW | CS_VREDRAW;
	wndclass.lpfnWndProc = WndProc;
	wndclass.cbClsExtra = 0;
	wndclass.cbWndExtra = 0;
	wndclass.hInstance = hInstance;
	wndclass.hIcon = LoadIcon(NULL, IDI_APPLICATION);
	wndclass.hCursor = LoadCursor(NULL, IDC_ARROW);
	wndclass.hbrBackground = (HBRUSH)GetStockObject(WHITE_BRUSH);
	wndclass.lpszMenuName = NULL;
	wndclass.lpszClassName = szAppName;
	
	if(!RegisterClass(&wndclass)) {	//ע�� 
		MessageBox(NULL, TEXT("���������Ҫ�� Windows NT ����ִ�У�"),szAppName,MB_ICONERROR);
		return 0;
	}

	hwnd = CreateWindow(// ��ô��ھ�� 
		szAppName,			// ����������
	    szAppName,			// ���ڱ���
	    WS_OVERLAPPEDWINDOW,// ���ڷ�񣬻�ƴ��ڸ�ʽ
	    CW_USEDEFAULT,		// ��ʼλ�� x ����
	    CW_USEDEFAULT,		// ��ʼλ�� y ����
	    CW_USEDEFAULT,		// ��ʼ x �����С 
	    CW_USEDEFAULT,		// ��ʼ y �����С 
	    NULL,	// �����ھ�� û��дNULL
	    NULL,	// ���ڲ˵����
	    hInstance,	// ����ʵ����� Windows��������� 
	    NULL
	);

	if(hwnd == NULL) {	//���ΪNULL����ʧ�� 
		MessageBox(NULL, TEXT("Window Creation Failed!"),szAppName,MB_ICONERROR);
		return 0;
	}
	
	// ��ʾ���� 
	ShowWindow(hwnd, iCmdShow);
	UpdateWindow(hwnd);
	
	//ѭ����ȡ��Ϣ 
	while(GetMessage(&msg, NULL, 0, 0)) { 
		TranslateMessage(&msg); 
		DispatchMessage(&msg);
	}
	return msg.wParam;
}

//��Ϣ�ص����� 
LRESULT CALLBACK WndProc(HWND hwnd, UINT message, WPARAM wParam, LPARAM lParam) {
	HDC hdc;
	PAINTSTRUCT ps;
	RECT rect;
	
	switch (message)
	{
		case WM_PAINT:
	        hdc = BeginPaint(hwnd, &ps);
	        GetClientRect(hwnd, &rect);
	        DrawText(hdc, TEXT("��Һã������ҵĵ�һ�����ڳ���"), -1, &rect,
	                DT_SINGLELINE | DT_CENTER | DT_VCENTER);
	        EndPaint(hwnd, &ps);
	        return 0;
	
		case WM_DESTROY:
	        PostQuitMessage(0);
	        return 0;
	}
	
	//Ĭ�ϴ���ʽ 
	return DefWindowProc(hwnd, message, wParam, lParam);
}
