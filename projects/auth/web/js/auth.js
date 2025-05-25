const API_URL = 'http://localhost:8000/auth';

const doms = {
    form: document.querySelector('#auth-form'),
}

doms.form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(doms.form);
    const data = Object.fromEntries(formData.entries());

    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    const result = await response.json();
    
    if (result.code !== 200) {
        alert(result.error);
    }

    if (result.code === 200) {
        // 设置localStorage
        localStorage.setItem('token', result.data?.access_token);
        // 解析redirect
        const redirect = new URLSearchParams(window.location.search).get('redirect');
        if (redirect) {
            window.location.href = redirect;
        }
    }

})

const redirect = new URLSearchParams(window.location.search).get('redirect');
if (!redirect) {
    alert('缺少redirect参数!');
    window.history.back();
    window.close();
}