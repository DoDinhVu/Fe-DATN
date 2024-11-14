document.addEventListener("DOMContentLoaded", function () {
    const sidebars = document.getElementById("sidebars");
    if (sidebars) {
        sidebars.innerHTML = `
            <nav id="sidebar" class="sidebar js-sidebar">
            <div class="sidebar-content js-simplebar">
                <a class="sidebar-brand" href="/static/Admin/index.html" >
                    <span class="align-middle">Admin</span>
                </a>

                <ul class="sidebar-nav">
                    

                    <li class="sidebar-items " >
                        <a class="sidebar-link" href="/static/Admin/index.html">
                            <i class="align-middle" data-feather="sliders"></i>
                            <span class="align-middle">Dashboard</span>
                        </a>
                    </li>

                    <li class="sidebar-items" data-page="profile">
                        <a class="sidebar-link" href="/static/Admin/Pages/profile.html" onclick="">
                            <i class="align-middle" data-feather="user"></i>
                            <span class="align-middle">Profile</span>
                        </a>
                    </li>

                    <li class="sidebar-items" data-page="candidate">
                        <a class="sidebar-link" href="/static/Admin/Pages/candidate.html" onclick="">
                            <i class="align-middle" data-feather="log-in"></i>
                            <span class="align-middle">Candidate</span>
                        </a>
                    </li>

                    <li class="sidebar-items" data-page="company">
                        <a class="sidebar-link" href="/static/Admin/Pages/company.html" onclick="">
                            <i class="align-middle" data-feather="home"></i>
                            <span class="align-middle">Company</span>
                        </a>
                    </li>
                    <li class="sidebar-items" data-page="user">
                        <a class="sidebar-link" href="/static/Admin/Pages/user.html" onclick="">
                            <i class="align-middle" data-feather="users"></i>
                            <span class="align-middle">User</span>
                        </a>
                    </li>
                    <li class="sidebar-items" data-page="category_job">
                        <a class="sidebar-link" href="/static/Admin/Pages/category_job.html" >
                            <i class="align-middle" data-feather="shopping-bag"></i>
                            <span class="align-middle">Category Job</span>
                        </a>
                    </li>

                    
                </ul>
            </div>
        </nav>
        `;
    }
});