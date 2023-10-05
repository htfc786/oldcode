#include <stdio.h>
#include <windows.h>
#include <graphics.h>
#include <easyx.h>


BOOL CALLBACK EnumWindowsProc(_In_ HWND hwnd, _In_ LPARAM Lparam);


int main(int argc, char* argv[])
{
    int nScreenWidth, nScreenHeight;
    nScreenWidth = GetSystemMetrics(SM_CXSCREEN);
    nScreenHeight = GetSystemMetrics(SM_CYSCREEN);
    printf("当前屏幕的分辨率为：%d×%d\n", nScreenWidth, nScreenHeight);


    initgraph(nScreenWidth, nScreenHeight, SHOWCONSOLE);

    loadimage(NULL, _T("C:\\Users\\Administrator\\Desktop\\背景.png"), nScreenWidth, nScreenHeight, true);
            	// IMAGE * pDstImg,  保存图像的 IMAGE 对象指针  
        		// LPCTSTR pImgFile,  图片文件名  
        	    // int nWidth = 0,  图片的拉伸宽度  
        		// int nHeight = 0,  图片的拉伸高度  
        	    // bool bResize = false  是否调整 IMAGE 的大小以适应图片  
    

    LPCWSTR lpParameter = L" C:\\Users\\Administrator\\Desktop\\背景.png -x 1280 -y 1024 -loop 0";
    STARTUPINFOW si{ 0 };
    PROCESS_INFORMATION pi{ 0 };

    
    Sleep(1000);                                                 // 等待视频播放器启动完成
    HWND hProgman = FindWindowW(L"Progman", 0);                  // 找到PM窗口
    SendMessageTimeout(hProgman, 0x52c, 0, 0, 0, 100, 0);                               // 给它发特殊消息
    HWND hFfplay = FindWindowW(L"EasyXWnd", 0);                   // 找到视频窗口
    SetParent(hFfplay, hProgman);                               // 将视频窗口设置为PM的子窗口
    EnumWindows(EnumWindowsProc, 0);                            // 找到第二个workerw窗口并隐藏它
    
    getchar();

    return 0;
}


BOOL CALLBACK EnumWindowsProc(_In_ HWND hwnd, _In_ LPARAM Lparam)
{
    HWND hDefView = FindWindowExW(hwnd, 0, L"SHELLDLL_DefView", 0);
    if (hDefView != 0) {
        // 找它的下一个窗口，类名为WorkerW, 隐藏它
        HWND hWorkerW = FindWindowExW(0, hwnd, L"WorkerW", 0);
        ShowWindow(hWorkerW, SW_HIDE);

        return FALSE;
    }
    return TRUE;
}


