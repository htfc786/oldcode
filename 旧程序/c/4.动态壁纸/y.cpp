/*#include <windows.h>
#include <stdio.h>


BOOL CALLBACK EnumWindowsProc(_In_ HWND hwnd, _In_ LPARAM Lparam);

int main(int argc, char* argv[])
{
    int nScreenWidth, nScreenHeight;
    nScreenWidth = GetSystemMetrics(SM_CXSCREEN);
    nScreenHeight = GetSystemMetrics(SM_CYSCREEN);
    printf("��ǰ��Ļ�ķֱ���Ϊ��%d��%d\n", nScreenWidth, nScreenHeight);

    LPCWSTR lpParameter = L" C:\\Users\\Administrator\\Desktop\\����.png -x 1280 -y 1024 -loop 0";
    STARTUPINFOW si{ 0 };
    PROCESS_INFORMATION pi{ 0 };

    if (CreateProcessW(L"D:\\����\\ffmpeg\\bin\\ffplay.exe", (LPWSTR)lpParameter, 0, 0, 0, 0, 0, 0, &si, &pi))
    {
        Sleep(1000);                                                 // �ȴ���Ƶ�������������
        HWND hProgman = FindWindowW(L"Progman", 0);                  // �ҵ�PM����
        SendMessageTimeout(hProgman, 0x52c, 0, 0, 0, 100, 0);                               // ������������Ϣ
        HWND hFfplay = FindWindowW(L"SDL_app", 0);                   // �ҵ���Ƶ����
        SetParent(hFfplay, hProgman);                               // ����Ƶ��������ΪPM���Ӵ���
        EnumWindows(EnumWindowsProc, 0);                            // �ҵ��ڶ���workerw���ڲ�������
    }
    getchar();
    return 0;
}


BOOL CALLBACK EnumWindowsProc(_In_ HWND hwnd, _In_ LPARAM Lparam)
{
    HWND hDefView = FindWindowExW(hwnd, 0, L"SHELLDLL_DefView", 0);
    if (hDefView != 0) {
        // ��������һ�����ڣ�����ΪWorkerW, ������
        HWND hWorkerW = FindWindowExW(0, hwnd, L"WorkerW", 0);
        ShowWindow(hWorkerW, SW_HIDE);

        return FALSE;
    }
    return TRUE;
}

*/
