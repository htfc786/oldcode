/*#include <windows.h>
#include <stdio.h>


BOOL CALLBACK EnumWindowsProc(_In_ HWND hwnd, _In_ LPARAM Lparam);

int main(int argc, char* argv[])
{
    int nScreenWidth, nScreenHeight;
    nScreenWidth = GetSystemMetrics(SM_CXSCREEN);
    nScreenHeight = GetSystemMetrics(SM_CYSCREEN);
    printf("当前屏幕的分辨率为：%d×%d\n", nScreenWidth, nScreenHeight);

    LPCWSTR lpParameter = L" C:\\Users\\Administrator\\Desktop\\背景.png -x 1280 -y 1024 -loop 0";
    STARTUPINFOW si{ 0 };
    PROCESS_INFORMATION pi{ 0 };

    if (CreateProcessW(L"D:\\工具\\ffmpeg\\bin\\ffplay.exe", (LPWSTR)lpParameter, 0, 0, 0, 0, 0, 0, &si, &pi))
    {
        Sleep(1000);                                                 // 等待视频播放器启动完成
        HWND hProgman = FindWindowW(L"Progman", 0);                  // 找到PM窗口
        SendMessageTimeout(hProgman, 0x52c, 0, 0, 0, 100, 0);                               // 给它发特殊消息
        HWND hFfplay = FindWindowW(L"SDL_app", 0);                   // 找到视频窗口
        SetParent(hFfplay, hProgman);                               // 将视频窗口设置为PM的子窗口
        EnumWindows(EnumWindowsProc, 0);                            // 找到第二个workerw窗口并隐藏它
    }
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

*/
