document.querySelector('.login-btn').addEventListener('click', function(event) {
    event.preventDefault();

    // 定義正確的帳號資訊
    const correctEmail = "user@gmail.com";
    const correctPhone = "0900123456";
    const correctPassword = "FB2025";

    // 獲取使用者輸入的值
    const userInput = document.querySelector('input[type="text"]').value;
    const userPassword = document.querySelector('input[type="password"]').value;

    // 檢查帳號是否符合 email 或手機號碼，並且密碼正確
    if ((userInput === correctEmail || userInput === correctPhone) && userPassword === correctPassword) {
        document.getElementById("login-success").style.display = "block"; // 顯示成功訊息
        setTimeout(() => {
            document.getElementById("login-success").style.display = "none"; // 3秒後隱藏
        }, 3000);
    } else {
        alert("登入失敗！請檢查您的帳號或密碼是否正確。");
    }
});