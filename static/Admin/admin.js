function navigate(page) {
    // Cập nhật hash URL
    window.location.hash = page;

    // Tải lại nội dung trang tương ứng
    const contentDiv = document.getElementById('content');
    fetch(`/static/Admin/pages/${page}.html`)
    
        .then(response => response.ok ? response.text() : Promise.reject())
        .then(data => {
            contentDiv.innerHTML = data;
            feather.replace(); // Cập nhật lại các icon
           
        })
        .catch(() => {
            contentDiv.innerHTML = `<h1>404 - Page Not Found</h1>`;
            
        });
       

    // Cập nhật trạng thái active cho menu
    setActiveMenuItem(page);
}

function setActiveMenuItem(page) {
    // Xóa lớp active khỏi tất cả các mục menu
    const items = document.querySelectorAll('.sidebar-items');
    items.forEach(item => {
        item.classList.remove('active');
    });

    // Thêm lớp active cho mục menu tương ứng
    const activeItem = document.querySelector(`.sidebar-items[data-page="${page}"]`);
    if (activeItem) {
        activeItem.classList.add('active');
    }
}

// Lắng nghe sự thay đổi URL hash
window.addEventListener('hashchange', () => {
    const page = window.location.hash.substring(1);
    setActiveMenuItem(page);
});

// Tải trang mặc định khi load lần đầu
window.addEventListener('load', () => {
    const initialPage = window.location.hash ? window.location.hash.substring(1) : 'thongke';
    navigate(initialPage);
});

console.log(window.location.href);
