document.addEventListener('DOMContentLoaded', () => {

  // ─── INITIAL MOCK DATABASE ────────────────────────────────────
  let books = [
    { title: "Top Curated Books to Read", category: "Fiction", stock: 24, price: 18.50, cover: "./blog_card_rec.png" },
    { title: "How to Build a Reading Routine", category: "Non Fiction", stock: 12, price: 14.99, cover: "./book_pile_hero.png" },
    { title: "Rise of Independent Authors", category: "History", stock: 3, price: 21.00, cover: "./service_gift.png" },
    { title: "Why Classic Novels Matter Today", category: "Biography", stock: 45, price: 25.50, cover: "./rare_books_showcase.png" },
    { title: "The Bookstore Curator Life", category: "Fiction", stock: 8, price: 19.95, cover: "./cozy_bookstore_hero.png" },
    { title: "Uncovering Lost Manuscripts", category: "Children", stock: 0, price: 32.00, cover: "./service_library.png" }
  ];

  const orders = [
    { id: "ORD-9284", customer: "Amelia Thorne", book: "Why Classic Novels Matter Today", price: 25.50, date: "June 24, 2026", status: "completed" },
    { id: "ORD-9283", customer: "Edward Harris", book: "Top Curated Books to Read", price: 18.50, date: "June 24, 2026", status: "processing" },
    { id: "ORD-9282", customer: "Clara Oswald", book: "Rise of Independent Authors", price: 21.00, date: "June 23, 2026", status: "shipped" },
    { id: "ORD-9281", customer: "Arthur Pendelton", book: "The Bookstore Curator Life", price: 19.95, date: "June 22, 2026", status: "completed" },
    { id: "ORD-9280", customer: "Julian Thorne", book: "How to Build a Reading Routine", price: 14.99, date: "June 20, 2026", status: "cancelled" }
  ];

  const customers = [
    { name: "Amelia Thorne", email: "amelia@thornewriting.com", orders: 12, tier: "platinum" },
    { name: "Edward Harris", email: "edward.harris@historical.org", orders: 5, tier: "gold" },
    { name: "Clara Oswald", email: "clara.o@spaceandtime.net", orders: 8, tier: "silver" },
    { name: "Arthur Pendelton", email: "arthur.pendelton@antiquarian.co", orders: 24, tier: "platinum" },
    { name: "Julian Thorne", email: "julian@independentpress.com", orders: 3, tier: "silver" },
    { name: "Emily Harel", email: "emily.h@alexandria-archives.org", orders: 15, tier: "gold" }
  ];

  // ─── DOM INJECTION TRIGGERS ──────────────────────────────────
  const recentOrdersTbody = document.getElementById('recent-orders-tbody');
  const ordersListTbody = document.getElementById('orders-list-tbody');
  const customersListTbody = document.getElementById('customers-list-tbody');
  const inventoryGrid = document.getElementById('inventory-grid');

  // Populate Recent Orders (Overview Section)
  const populateRecentOrders = () => {
    if (!recentOrdersTbody) return;
    recentOrdersTbody.innerHTML = '';
    orders.slice(0, 4).forEach(order => {
      const row = `
        <tr>
          <td><strong>#${order.id}</strong></td>
          <td>${order.customer}</td>
          <td>${order.book}</td>
          <td>$${order.price.toFixed(2)}</td>
          <td><span class="status-pill ${order.status}">${order.status}</span></td>
        </tr>
      `;
      recentOrdersTbody.insertAdjacentHTML('beforeend', row);
    });
  };

  // Populate Store Orders List (Orders Section)
  const populateOrdersList = (filterText = '') => {
    if (!ordersListTbody) return;
    ordersListTbody.innerHTML = '';
    const query = filterText.toLowerCase();
    
    orders.forEach(order => {
      if (order.id.toLowerCase().includes(query) || order.customer.toLowerCase().includes(query) || order.book.toLowerCase().includes(query)) {
        const row = `
          <tr>
            <td><strong>#${order.id}</strong></td>
            <td>${order.book}</td>
            <td>${order.customer}</td>
            <td>${order.date}</td>
            <td><span class="status-pill ${order.status}">${order.status}</span></td>
            <td>
              <button class="action-icon-btn" onclick="window.triggerToast('Order details viewing simulated.')" title="View Details"><i class="fas fa-eye"></i></button>
              <button class="action-icon-btn" onclick="window.triggerToast('Order dispatch simulated.')" title="Ship Order"><i class="fas fa-truck"></i></button>
            </td>
          </tr>
        `;
        ordersListTbody.insertAdjacentHTML('beforeend', row);
      }
    });
  };

  // Populate Customers Table
  const populateCustomersList = (filterText = '', tierFilter = 'all') => {
    if (!customersListTbody) return;
    customersListTbody.innerHTML = '';
    const query = filterText.toLowerCase();
    
    customers.forEach(cust => {
      const matchText = cust.name.toLowerCase().includes(query) || cust.email.toLowerCase().includes(query);
      const matchTier = tierFilter === 'all' || cust.tier === tierFilter;
      
      if (matchText && matchTier) {
        const firstLetter = cust.name.charAt(0);
        const row = `
          <tr>
            <td>
              <div class="customer-avatar-col">
                <div class="customer-avatar">${firstLetter}</div>
              </div>
            </td>
            <td><strong>${cust.name}</strong></td>
            <td>${cust.email}</td>
            <td>${cust.orders} Orders</td>
            <td><span class="membership-tier ${cust.tier}">${cust.tier} Member</span></td>
          </tr>
        `;
        customersListTbody.insertAdjacentHTML('beforeend', row);
      }
    });
  };

  // Populate Books Inventory
  const populateInventory = (filterText = '') => {
    if (!inventoryGrid) return;
    inventoryGrid.innerHTML = '';
    const query = filterText.toLowerCase();

    books.forEach((book, index) => {
      if (book.title.toLowerCase().includes(query) || book.category.toLowerCase().includes(query)) {
        let stockBadge = 'instock';
        let stockLabel = 'In Stock';
        if (book.stock === 0) {
          stockBadge = 'outofstock';
          stockLabel = 'Out of Stock';
        } else if (book.stock <= 5) {
          stockBadge = 'lowstock';
          stockLabel = `Low Stock (${book.stock})`;
        }

        const card = `
          <article class="inventory-card">
            <div class="inventory-img-wrapper">
              <img src="${book.cover}" alt="${book.title} Cover" class="inventory-img">
              <span class="inventory-badge ${stockBadge}">${stockLabel}</span>
            </div>
            <div class="inventory-info">
              <span class="inventory-cat">${book.category}</span>
              <h3 class="inventory-title">${book.title}</h3>
              <div class="inventory-meta">
                <span class="inventory-stock">${book.stock} copies</span>
                <span class="inventory-price">$${book.price.toFixed(2)}</span>
              </div>
              <div class="inventory-actions">
                <button class="btn btn-secondary edit-book-btn" data-index="${index}"><i class="fas fa-edit"></i> Edit</button>
                <button class="btn btn-secondary delete-action delete-book-btn" data-index="${index}"><i class="fas fa-trash"></i> Delete</button>
              </div>
            </div>
          </article>
        `;
        inventoryGrid.insertAdjacentHTML('beforeend', card);
      }
    });

    // Re-bind actions inside grid
    document.querySelectorAll('.edit-book-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const index = btn.getAttribute('data-index');
        openEditBookModal(index);
      });
    });

    document.querySelectorAll('.delete-book-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const index = btn.getAttribute('data-index');
        deleteBook(index);
      });
    });
  };

  // Initialize DB Populates
  populateRecentOrders();
  populateOrdersList();
  populateCustomersList();
  populateInventory();

  // ─── DYNAMIC SECTION SWITCHING ────────────────────────────────
  const menuItems = document.querySelectorAll('.menu-item');
  const sections = document.querySelectorAll('.dashboard-section');
  const sidebarDrawer = document.getElementById('sidebarDrawer');
  const sidebarOverlay = document.getElementById('sidebarOverlay');

  const switchSection = (sectionName) => {
    sections.forEach(sec => {
      sec.classList.remove('active');
    });
    const targetSection = document.getElementById(`section-${sectionName}`);
    if (targetSection) {
      targetSection.classList.add('active');
      window.scrollTo(0, 0);
      
      // Load counters animation again if overview is selected
      if (sectionName === 'overview') {
        triggerCounters();
      }
    }

    menuItems.forEach(item => {
      if (item.getAttribute('data-section') === sectionName) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });

    // Close drawers on selection (mobile support)
    sidebarDrawer.classList.remove('open');
    sidebarOverlay.classList.remove('active');
  };

  menuItems.forEach(item => {
    item.addEventListener('click', () => {
      const sectionName = item.getAttribute('data-section');
      switchSection(sectionName);
    });
  });

  // Link profile settings button
  const profileSettingsBtn = document.querySelector('.dropdown-btn[data-target="settings"]');
  if (profileSettingsBtn) {
    profileSettingsBtn.addEventListener('click', () => {
      switchSection('settings');
      const profileDropdown = document.getElementById('profileDropdown');
      if (profileDropdown) profileDropdown.classList.remove('open');
    });
  }

  // View All orders button in overview
  const viewAllOrdersBtn = document.querySelector('.view-all-btn[data-target="orders"]');
  if (viewAllOrdersBtn) {
    viewAllOrdersBtn.addEventListener('click', () => {
      switchSection('orders');
    });
  }

  // ─── MODAL ADD/EDIT BOOK OPERATIONS ───────────────────────────
  const addBookModal = document.getElementById('addBookModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const bookInventoryForm = document.getElementById('bookInventoryForm');
  const addBookBtn = document.getElementById('addBookBtn');
  const modalHeaderTitle = document.getElementById('modalHeaderTitle');
  const modalSubmitBtn = document.getElementById('modalSubmitBtn');

  const openAddBookModal = () => {
    modalHeaderTitle.textContent = "Add New Book";
    modalSubmitBtn.querySelector('.btn-text').textContent = "Add Book";
    document.getElementById('edit-book-index').value = "";
    bookInventoryForm.reset();
    addBookModal.classList.add('active');
  };

  const openEditBookModal = (index) => {
    modalHeaderTitle.textContent = "Edit Book Inventory";
    modalSubmitBtn.querySelector('.btn-text').textContent = "Save Changes";
    
    const book = books[index];
    document.getElementById('edit-book-index').value = index;
    document.getElementById('book-title').value = book.title;
    document.getElementById('book-category').value = book.category;
    document.getElementById('book-stock').value = book.stock;
    document.getElementById('book-price').value = book.price;
    document.getElementById('book-cover-select').value = book.cover;

    addBookModal.classList.add('active');
  };

  const closeBookModal = () => {
    addBookModal.classList.remove('active');
  };

  if (addBookBtn) addBookBtn.addEventListener('click', openAddBookModal);
  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeBookModal);
  
  addBookModal.addEventListener('click', (e) => {
    if (e.target === addBookModal) closeBookModal();
  });

  bookInventoryForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const indexVal = document.getElementById('edit-book-index').value;
    const title = document.getElementById('book-title').value;
    const category = document.getElementById('book-category').value;
    const stock = parseInt(document.getElementById('book-stock').value);
    const price = parseFloat(document.getElementById('book-price').value);
    const cover = document.getElementById('book-cover-select').value;

    if (indexVal === "") {
      // Create new book
      books.unshift({ title, category, stock, price, cover });
      showToast("Book added to inventory successfully.");
    } else {
      // Edit existing
      books[parseInt(indexVal)] = { title, category, stock, price, cover };
      showToast("Book details updated successfully.");
    }

    populateInventory();
    closeBookModal();
  });

  const deleteBook = (index) => {
    if (confirm(`Are you sure you want to remove "${books[index].title}" from inventory?`)) {
      books.splice(index, 1);
      populateInventory();
      showToast("Book deleted from inventory.");
    }
  };

  // ─── SEARCH & FILTER LOGIC ────────────────────────────────────
  const inventorySearch = document.getElementById('inventory-search');
  if (inventorySearch) {
    inventorySearch.addEventListener('input', () => {
      populateInventory(inventorySearch.value);
    });
  }

  const ordersSearch = document.getElementById('orders-search');
  if (ordersSearch) {
    ordersSearch.addEventListener('input', () => {
      populateOrdersList(ordersSearch.value);
    });
  }

  const customersSearch = document.getElementById('customers-search');
  const tierFilter = document.getElementById('tier-filter');

  const filterCustomers = () => {
    const textVal = customersSearch ? customersSearch.value : '';
    const tierVal = tierFilter ? tierFilter.value : 'all';
    populateCustomersList(textVal, tierVal);
  };

  if (customersSearch) customersSearch.addEventListener('input', filterCustomers);
  if (tierFilter) tierFilter.addEventListener('change', filterCustomers);

  // ─── SETTINGS FORM INTERCEPTOR ────────────────────────────────
  const storeSettingsForm = document.getElementById('storeSettingsForm');
  if (storeSettingsForm) {
    storeSettingsForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const saveBtn = document.getElementById('saveSettingsBtn');
      const originalText = saveBtn.innerHTML;

      saveBtn.disabled = true;
      saveBtn.innerHTML = `
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" class="animate-spin" style="display:inline-block; vertical-align:middle; margin-right:5px;">
          <circle cx="12" cy="12" r="10" stroke-opacity="0.25"></circle>
          <path d="M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4z" fill="currentColor"></path>
        </svg> Saving...
      `;

      setTimeout(() => {
        // Sync toggles and theme settings to localStorage
        const themeField = document.getElementById('set-theme').value;
        const langField = document.getElementById('set-language').value;

        localStorage.setItem('bookstore-theme', themeField);
        localStorage.setItem('bookstore-dir', langField === 'ar' ? 'rtl' : 'ltr');

        // Apply changes
        if (themeField === 'light') {
          document.body.classList.add('light-mode');
          const themeIcon = document.getElementById('themeBtnIcon');
          if (themeIcon) themeIcon.className = 'fas fa-sun';
        } else {
          document.body.classList.remove('light-mode');
          const themeIcon = document.getElementById('themeBtnIcon');
          if (themeIcon) themeIcon.className = 'fas fa-moon';
        }

        const isRtl = langField === 'ar';
        document.documentElement.setAttribute('dir', isRtl ? 'rtl' : 'ltr');
        document.documentElement.setAttribute('lang', isRtl ? 'ar' : 'en');
        updateChartsThemeColors(themeField === 'light');

        showToast("System configurations saved.");
        saveBtn.disabled = false;
        saveBtn.innerHTML = originalText;
      }, 1000);
    });
  }

  // ─── TOAST NOTIFICATION SYSTEM ────────────────────────────────
  const toast = document.getElementById('toast-notification');
  const toastMessage = toast ? toast.querySelector('.toast-message') : null;

  function showToast(message) {
    if (!toast || !toastMessage) return;
    toastMessage.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
      toast.classList.remove('show');
    }, 4000);
  }

  window.triggerToast = function(msg) {
    showToast(msg);
  };

  // ─── ANIMATED STATS COUNTERS ──────────────────────────────────
  function triggerCounters() {
    const counterElements = document.querySelectorAll('.counter');
    counterElements.forEach(el => {
      const target = parseInt(el.getAttribute('data-value'));
      const duration = 1000; // 1 second animation
      const startTime = performance.now();

      const updateCounter = (currentTime) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        
        // Easing function outQuad
        const easeVal = progress * (2 - progress);
        const currentCount = Math.floor(easeVal * target);

        if (target >= 100000) {
          // Format revenue specifically
          el.textContent = currentCount.toLocaleString();
        } else {
          el.textContent = currentCount.toLocaleString();
        }

        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        } else {
          el.textContent = target.toLocaleString();
        }
      };

      requestAnimationFrame(updateCounter);
    });
  }

  triggerCounters();

  // ─── FIXED NAVBAR SCROLLED CLASS ──────────────────────────────
  const dashboardHeader = document.getElementById('dashboardHeader');
  const handleScroll = () => {
    if (dashboardHeader) {
      if (window.scrollY > 15) {
        dashboardHeader.classList.add('scrolled');
      } else {
        dashboardHeader.classList.remove('scrolled');
      }
    }
  };
  window.addEventListener('scroll', handleScroll);

  // ─── SIDEBAR OPEN/CLOSE DRAWER ────────────────────────────────
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const sidebarClose = document.getElementById('sidebarClose');

  if (hamburgerBtn && sidebarDrawer && sidebarOverlay) {
    hamburgerBtn.addEventListener('click', () => {
      sidebarDrawer.classList.add('open');
      sidebarOverlay.classList.add('active');
    });
  }

  const closeSidebar = () => {
    if (sidebarDrawer && sidebarOverlay) {
      sidebarDrawer.classList.remove('open');
      sidebarOverlay.classList.remove('active');
    }
  };

  if (sidebarClose) sidebarClose.addEventListener('click', closeSidebar);
  if (sidebarOverlay) sidebarOverlay.addEventListener('click', closeSidebar);

  // ─── PROFILE DROPDOWN MENU ────────────────────────────────────
  const profileTrigger = document.getElementById('profileTrigger');
  const profileDropdown = document.getElementById('profileDropdown');

  if (profileTrigger && profileDropdown) {
    profileTrigger.addEventListener('click', (e) => {
      e.stopPropagation();
      profileDropdown.classList.toggle('open');
    });

    document.addEventListener('click', (e) => {
      if (!profileDropdown.contains(e.target) && !profileTrigger.contains(e.target)) {
        profileDropdown.classList.remove('open');
      }
    });
  }

  // ─── INITIALIZE SYNCED THEME AND DIRECTION ──────────────────
  const savedTheme = localStorage.getItem('bookstore-theme') || 'light';
  const savedDir = localStorage.getItem('bookstore-dir') || 'ltr';

  // Apply theme on load
  if (savedTheme === 'light') {
    document.body.classList.add('light-mode');
    const themeIcon = document.getElementById('themeBtnIcon');
    if (themeIcon) themeIcon.className = 'fas fa-sun';
    const setThemeSelect = document.getElementById('set-theme');
    if (setThemeSelect) setThemeSelect.value = 'light';
  } else {
    document.body.classList.remove('light-mode');
    const themeIcon = document.getElementById('themeBtnIcon');
    if (themeIcon) themeIcon.className = 'fas fa-moon';
    const setThemeSelect = document.getElementById('set-theme');
    if (setThemeSelect) setThemeSelect.value = 'dark';
  }

  // Apply layout direction on load
  document.documentElement.setAttribute('dir', savedDir);
  document.documentElement.setAttribute('lang', savedDir === 'rtl' ? 'ar' : 'en');
  const setLangSelect = document.getElementById('set-language');
  if (setLangSelect) {
    setLangSelect.value = savedDir === 'rtl' ? 'ar' : 'en';
  }

  // Welcome Translation support
  const welcomeMsg = document.getElementById('welcomeMsg');
  if (welcomeMsg) {
    welcomeMsg.textContent = savedDir === 'rtl' ? 'مرحباً بعودتك، المدير' : 'Welcome Back, Admin';
  }

  // ─── THEME TOGGLERS ON HEADER ─────────────────────────────────
  function applyThemeToggle() {
    document.body.classList.toggle('light-mode');
    const isLight = document.body.classList.contains('light-mode');
    
    const themeIcon = document.getElementById('themeBtnIcon');
    if (themeIcon) {
      themeIcon.className = isLight ? 'fas fa-sun' : 'fas fa-moon';
    }

    const setThemeSelect = document.getElementById('set-theme');
    if (setThemeSelect) setThemeSelect.value = isLight ? 'light' : 'dark';

    localStorage.setItem('bookstore-theme', isLight ? 'light' : 'dark');
    updateChartsThemeColors(isLight);
    showToast(isLight ? 'Switched to Light Library mode.' : 'Switched to Midnight Archive mode.');
  }

  const themeBtn = document.getElementById('themeBtn');
  if (themeBtn) themeBtn.addEventListener('click', applyThemeToggle);

  function applyRtlToggle() {
    const currentDir = document.documentElement.getAttribute('dir') || 'ltr';
    const newDir = currentDir === 'rtl' ? 'ltr' : 'rtl';
    
    document.documentElement.setAttribute('dir', newDir);
    document.documentElement.setAttribute('lang', newDir === 'rtl' ? 'ar' : 'en');
    
    const setLangSelect = document.getElementById('set-language');
    if (setLangSelect) setLangSelect.value = newDir === 'rtl' ? 'ar' : 'en';
    if (welcomeMsg) {
      welcomeMsg.textContent = newDir === 'rtl' ? 'مرحباً بعودتك، المدير' : 'Welcome Back, Admin';
    }

    localStorage.setItem('bookstore-dir', newDir);
    showToast(newDir === 'rtl' ? 'تم تحويل اتجاه النص إلى اليمين (RTL).' : 'Text layout set to LTR (English).');
  }

  const rtlBtn = document.getElementById('rtlBtn');
  if (rtlBtn) rtlBtn.addEventListener('click', applyRtlToggle);

  // ─── CHART.JS SYSTEM CONFIGURATIONS ───────────────────────────
  let chartInstances = {};
  const isLightDefault = savedTheme === 'light';

  // Colors config
  const getChartColors = (isLight) => {
    return {
      text: isLight ? '#402F2C' : '#E5E0D8',
      grid: isLight ? 'rgba(74, 44, 42, 0.08)' : 'rgba(255, 255, 255, 0.08)',
      primary: '#C89B3C',
      secondary: '#4A2C2A',
      secondaryLight: isLight ? '#805E5B' : '#FAF8F5'
    };
  };

  const chartColors = getChartColors(isLightDefault);

  // Helper options creator
  const getCommonOptions = (colors) => {
    return {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          labels: {
            color: colors.text,
            font: { family: 'Poppins', size: 10 }
          }
        }
      },
      scales: {
        x: {
          grid: { color: colors.grid },
          ticks: { color: colors.text, font: { family: 'Poppins', size: 10 } }
        },
        y: {
          grid: { color: colors.grid },
          ticks: { color: colors.text, font: { family: 'Poppins', size: 10 } }
        }
      }
    };
  };

  // Build Overview Monthly Sales Bar Chart
  const salesCtx = document.getElementById('salesBarChart');
  if (salesCtx) {
    chartInstances.sales = new Chart(salesCtx, {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
          label: 'Book Sales ($)',
          data: [12000, 19000, 15000, 25000, 22000, 30000],
          backgroundColor: '#C89B3C',
          borderColor: '#FFE8B6',
          borderWidth: 1,
          borderRadius: 4
        }]
      },
      options: getCommonOptions(chartColors)
    });
  }

  // Build Overview Revenue Growth Line Chart
  const revenueCtx = document.getElementById('revenueLineChart');
  if (revenueCtx) {
    chartInstances.revenue = new Chart(revenueCtx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
          label: 'Revenue ($)',
          data: [25000, 29000, 36000, 48000, 52000, 68000],
          borderColor: '#C89B3C',
          backgroundColor: 'rgba(200, 155, 60, 0.1)',
          fill: true,
          tension: 0.4,
          borderWidth: 2
        }]
      },
      options: getCommonOptions(chartColors)
    });
  }

  // Build Books By Category Pie Chart
  const categoryCtx = document.getElementById('categoryPieChart');
  if (categoryCtx) {
    chartInstances.category = new Chart(categoryCtx, {
      type: 'pie',
      data: {
        labels: ['Fiction', 'Non Fiction', 'History', 'Biography', 'Children'],
        datasets: [{
          data: [35, 25, 15, 15, 10],
          backgroundColor: ['#4A2C2A', '#C89B3C', '#805E5B', '#F4E2B2', '#FFE8B6'],
          borderColor: 'transparent'
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'right',
            labels: {
              color: chartColors.text,
              font: { family: 'Poppins', size: 10 }
            }
          }
        }
      }
    });
  }

  // ─── ANALYTICS SPECIFIC CHARTS ────────────────────────────────
  const trafficCtx = document.getElementById('trafficLineChart');
  if (trafficCtx) {
    chartInstances.traffic = new Chart(trafficCtx, {
      type: 'line',
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
          label: 'Store Traffic (Visitors)',
          data: [320, 410, 380, 500, 610, 850, 720],
          borderColor: '#C89B3C',
          backgroundColor: 'transparent',
          tension: 0.3,
          borderWidth: 2.5,
          pointBackgroundColor: '#FFFFFF'
        }]
      },
      options: getCommonOptions(chartColors)
    });
  }

  const popularCtx = document.getElementById('popularDoughnutChart');
  if (popularCtx) {
    chartInstances.popular = new Chart(popularCtx, {
      type: 'doughnut',
      data: {
        labels: ['Fiction', 'Non-Fiction', 'Collectibles', 'Journals'],
        datasets: [{
          data: [45, 30, 15, 10],
          backgroundColor: ['#4A2C2A', '#C89B3C', '#805E5B', '#FFE8B6'],
          borderWidth: 0
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              color: chartColors.text,
              font: { family: 'Poppins', size: 10 }
            }
          }
        }
      }
    });
  }

  const customerCtx = document.getElementById('customerGrowthChart');
  if (customerCtx) {
    chartInstances.customer = new Chart(customerCtx, {
      type: 'line',
      data: {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [{
          label: 'Total Registered Members',
          data: [1200, 1500, 1900, 2400],
          borderColor: '#C89B3C',
          backgroundColor: 'rgba(200, 155, 60, 0.15)',
          fill: true,
          borderWidth: 2,
          tension: 0.4
        }]
      },
      options: getCommonOptions(chartColors)
    });
  }

  const topSellingCtx = document.getElementById('topSellingBarChart');
  if (topSellingCtx) {
    chartInstances.topSelling = new Chart(topSellingCtx, {
      type: 'bar',
      data: {
        labels: ['Classic Novels', 'Curated Books', 'Independent Press', 'Reading Routine', 'Lost Manuscripts'],
        datasets: [{
          label: 'Units Sold',
          data: [340, 280, 210, 180, 95],
          backgroundColor: '#4A2C2A',
          borderColor: '#C89B3C',
          borderWidth: 1,
          borderRadius: 4
        }]
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            labels: {
              color: chartColors.text,
              font: { family: 'Poppins', size: 10 }
            }
          }
        },
        scales: {
          x: {
            grid: { color: chartColors.grid },
            ticks: { color: chartColors.text, font: { family: 'Poppins', size: 10 } }
          },
          y: {
            grid: { color: chartColors.grid },
            ticks: { color: chartColors.text, font: { family: 'Poppins', size: 10 } }
          }
        }
      }
    });
  }

  // Dynamic Theme updater for Charts labels
  function updateChartsThemeColors(isLight) {
    const colors = getChartColors(isLight);
    
    Object.keys(chartInstances).forEach(key => {
      const chart = chartInstances[key];
      
      // Update ticks and labels colors
      if (chart.options.scales) {
        if (chart.options.scales.x) {
          chart.options.scales.x.ticks.color = colors.text;
          chart.options.scales.x.grid.color = colors.grid;
        }
        if (chart.options.scales.y) {
          chart.options.scales.y.ticks.color = colors.text;
          chart.options.scales.y.grid.color = colors.grid;
        }
      }

      if (chart.options.plugins && chart.options.plugins.legend) {
        chart.options.plugins.legend.labels.color = colors.text;
      }

      // Special overrides for bar datasets colors
      if (key === 'topSelling') {
        chart.data.datasets[0].backgroundColor = isLight ? '#805E5B' : '#4A2C2A';
      }

      chart.update();
    });
  }

  // Initial chart color update just in case
  updateChartsThemeColors(isLightDefault);
});
