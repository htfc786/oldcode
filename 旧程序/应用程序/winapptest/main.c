#include <windows.h>

//程序名字
static TCHAR szAppName[] = TEXT("你好世界！"); 

//回调函数 
LRESULT CALLBACK WndProc(HWND hwnd, UINT Message, WPARAM wParam, LPARAM lParam); 

/* The 'main' function of Win32 GUI programs: this is where execution starts */
int WINAPI WinMain(HINSTANCE hInstance, HINSTANCE hPrevInstance, LPSTR lpCmdLine, int iCmdShow) {
	
	WNDCLASS wndclass;	// 
	HWND hwnd; // 窗口句柄 
	MSG msg; //消息 
	
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
	
	if(!RegisterClass(&wndclass)) {	//注册 
		MessageBox(NULL, TEXT("这个程序需要在 Windows NT 才能执行！"),szAppName,MB_ICONERROR);
		return 0;
	}

	hwnd = CreateWindow(// 获得窗口句柄 
		szAppName,			// 窗口类名称
	    szAppName,			// 窗口标题
	    WS_OVERLAPPEDWINDOW,// 窗口风格，或称窗口格式
	    CW_USEDEFAULT,		// 初始位置 x 坐标
	    CW_USEDEFAULT,		// 初始位置 y 坐标
	    CW_USEDEFAULT,		// 初始 x 方向大小 
	    CW_USEDEFAULT,		// 初始 y 方向大小 
	    NULL,	// 父窗口句柄 没有写NULL
	    NULL,	// 窗口菜单句柄
	    hInstance,	// 程序实例句柄 Windows传给程序的 
	    NULL
	);

	if(hwnd == NULL) {	//句柄为NULL创建失败 
		MessageBox(NULL, TEXT("Window Creation Failed!"),szAppName,MB_ICONERROR);
		return 0;
	}
	
	// 显示窗口 
	ShowWindow(hwnd, iCmdShow);
	UpdateWindow(hwnd);
	
	//循环获取消息 
	while(GetMessage(&msg, NULL, 0, 0)) { 
		TranslateMessage(&msg); 
		DispatchMessage(&msg);
	}
	return msg.wParam;
}

//消息回调函数 
LRESULT CALLBACK WndProc(HWND hwnd, UINT message, WPARAM wParam, LPARAM lParam) {
	HDC hdc;
	PAINTSTRUCT ps;
	RECT rect;
	
	switch (message)
	{
		case WM_PAINT:
	        hdc = BeginPaint(hwnd, &ps);
	        GetClientRect(hwnd, &rect);
	        DrawText(hdc, TEXT("大家好，这是我的第一个窗口程序！"), -1, &rect,
	                DT_SINGLELINE | DT_CENTER | DT_VCENTER);
	        EndPaint(hwnd, &ps);
	        return 0;
	
		case WM_DESTROY:
	        PostQuitMessage(0);
	        return 0;
	}
	
	//默认处理方式 
	return DefWindowProc(hwnd, message, wParam, lParam);
}
