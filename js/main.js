// YNNGOSF Website JavaScript

// Language switching functionality
const translations = {
  ar: {
    // Navigation
    'nav-home': 'الرئيسية',
    'nav-about': 'من نحن',
    'nav-work': 'عملنا',
    'nav-media': 'الإعلام',
    'nav-announcements': 'إعلانات',
    'nav-map': 'الخريطة التفاعلية',
    'nav-library': 'المكتبة',
    'nav-memberships': 'العضويات',
    'nav-contact': 'تواصل معنا',
    
    // Home page
    'hero-title': 'منتدى المنظمات غير الحكومية الوطنية اليمنية',
    'hero-subtitle': 'آلية تنسيق وطنية للمنظمات الوطنية غير الحكومية النشطة في اليمن',
    'hero-description': 'نهدف إلى إنشاء منصة للتواصل المحلي، وتعزيز تبادل المعلومات، وتطوير القدرات، ودعم استراتيجية التوطين',
    'btn-learn-more': 'اعرف المزيد',
    'btn-join-us': 'انضم إلينا',
    
    // Statistics
    'stat-members': 'عضو',
    'stat-projects': 'مشروع',
    'stat-governorates': 'محافظة',
    'stat-beneficiaries': 'مستفيد',
    
    // Map section
    'map-title': 'خريطتنا التفاعلية',
    'map-description': 'تتتبع خريطتنا التفاعلية الوجود العملياتي في اليمن بهدف زيادة التعاون والتنسيق بين أعضاء المنتدى والمنظمات الأخرى',
    'btn-explore-map': 'استكشف الخريطة',
    
    // News section
    'latest-news': 'أحدث الأخبار',
    'upcoming-events': 'الأحداث القادمة',
    'read-more': 'اقرأ المزيد',
    
    // Footer
    'footer-about': 'حول المنتدى',
    'footer-quick-links': 'روابط سريعة',
    'footer-contact': 'تواصل معنا',
    'footer-follow': 'تابعنا على',
    'footer-rights': 'جميع الحقوق محفوظة',
    
    // About sections
    'about-vision': 'الرؤية',
    'about-mission': 'الرسالة',
    'about-values': 'القيم',
    'about-goals': 'الأهداف',
    'about-where-work': 'أين نعمل',
    'about-structure': 'هيكل المنتدى',
    'about-strategy': 'استراتيجية المنتدى',
    
    // Work sections
    'work-advocacy': 'المناصرة',
    'work-coordination': 'التنسيق',
    'work-working-groups': 'مجموعات العمل',
    'work-representation': 'التمثيل',
    
    // Media sections
    'media-news': 'الأخبار',
    'media-photos': 'الصور',
    'media-videos': 'الفيديوهات',
    'media-success-stories': 'قصص النجاح',
    'media-infographic': 'انفوجرافيك',
    
    // Announcements
    'announce-jobs': 'الوظائف',
    'announce-tenders': 'المناقصات',
    'announce-funding': 'فرص التمويل',
    'announce-training': 'فرص التدريب',
    
    // Library
    'library-reports': 'التقارير',
    'library-achievements': 'الإنجازات',
    'library-policies': 'السياسات والأدلة',
    'library-training-records': 'تسجيلات التدريبات',
    
    // Memberships
    'membership-join': 'انضم معنا',
    'membership-current': 'العضويات الحالية',
    'membership-login': 'تسجيل الدخول'
  },
  
  en: {
    // Navigation
    'nav-home': 'Home',
    'nav-about': 'About Us',
    'nav-work': 'Our Work',
    'nav-media': 'Media',
    'nav-announcements': 'Announcements',
    'nav-map': 'Interactive Map',
    'nav-library': 'Library',
    'nav-memberships': 'Memberships',
    'nav-contact': 'Contact Us',
    
    // Home page
    'hero-title': 'Yemeni National NGOs Forum',
    'hero-subtitle': 'A national coordination mechanism for active national non-governmental organizations in Yemen',
    'hero-description': 'We aim to establish a platform for local-to-local communication, promote information sharing, build capacities, and support the localization strategy',
    'btn-learn-more': 'Learn More',
    'btn-join-us': 'Join Us',
    
    // Statistics
    'stat-members': 'Members',
    'stat-projects': 'Projects',
    'stat-governorates': 'Governorates',
    'stat-beneficiaries': 'Beneficiaries',
    
    // Map section
    'map-title': 'Our Interactive Map',
    'map-description': 'Our interactive map tracks operational presence in Yemen with the aim of increasing cooperation and coordination between Forum members and other organizations',
    'btn-explore-map': 'Explore Map',
    
    // News section
    'latest-news': 'Latest News',
    'upcoming-events': 'Upcoming Events',
    'read-more': 'Read More',
    
    // Footer
    'footer-about': 'About Forum',
    'footer-quick-links': 'Quick Links',
    'footer-contact': 'Contact Us',
    'footer-follow': 'Follow Us',
    'footer-rights': 'All Rights Reserved',
    
    // About sections
    'about-vision': 'Vision',
    'about-mission': 'Mission',
    'about-values': 'Values',
    'about-goals': 'Goals',
    'about-where-work': 'Where We Work',
    'about-structure': 'Forum Structure',
    'about-strategy': 'Forum Strategy',
    
    // Work sections
    'work-advocacy': 'Advocacy',
    'work-coordination': 'Coordination',
    'work-working-groups': 'Working Groups',
    'work-representation': 'Representation',
    
    // Media sections
    'media-news': 'News',
    'media-photos': 'Photos',
    'media-videos': 'Videos',
    'media-success-stories': 'Success Stories',
    'media-infographic': 'Infographic',
    
    // Announcements
    'announce-jobs': 'Jobs',
    'announce-tenders': 'Tenders',
    'announce-funding': 'Funding Opportunities',
    'announce-training': 'Training Opportunities',
    
    // Library
    'library-reports': 'Reports',
    'library-achievements': 'Achievements',
    'library-policies': 'Policies & Guidelines',
    'library-training-records': 'Training Records',
    
    // Memberships
    'membership-join': 'Join Us',
    'membership-current': 'Current Memberships',
    'membership-login': 'Login'
  }
};

// Current language
let currentLang = 'ar';

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
  initializeLanguage();
  initializeAnimations();
  initializeNavigation();
  initializeCounters();
});

// Language switching
function switchLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  document.body.dir = lang === 'ar' ? 'rtl' : 'ltr';
  
  // Update all translatable elements
  const elements = document.querySelectorAll('[data-translate]');
  elements.forEach(element => {
    const key = element.getAttribute('data-translate');
    if (translations[lang] && translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });
  
  // Update language buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  document.querySelector(`[onclick="switchLanguage('${lang}')"]`).classList.add('active');
  
  // Save language preference
  localStorage.setItem('preferred-language', lang);
}

// Initialize language from localStorage or default to Arabic
function initializeLanguage() {
  const savedLang = localStorage.getItem('preferred-language') || 'ar';
  switchLanguage(savedLang);
}

// Smooth scrolling for anchor links
function initializeNavigation() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  
  // Mobile menu toggle
  const navbarToggler = document.querySelector('.navbar-toggler');
  const navbarCollapse = document.querySelector('.navbar-collapse');
  
  if (navbarToggler && navbarCollapse) {
    navbarToggler.addEventListener('click', function() {
      navbarCollapse.classList.toggle('show');
    });
  }
}

// Animated counters
function initializeCounters() {
  const counters = document.querySelectorAll('.stat-number');
  const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px 0px -100px 0px'
  };
  
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  counters.forEach(counter => {
    observer.observe(counter);
  });
}

function animateCounter(element) {
  const target = parseInt(element.getAttribute('data-count'));
  const duration = 2000;
  const step = target / (duration / 16);
  let current = 0;
  
  const timer = setInterval(() => {
    current += step;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    element.textContent = Math.floor(current).toLocaleString();
  }, 16);
}

// Scroll animations
function initializeAnimations() {
  const animatedElements = document.querySelectorAll('.fade-in');
  
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });
  
  animatedElements.forEach(element => {
    observer.observe(element);
  });
}

// Form validation
function validateForm(formId) {
  const form = document.getElementById(formId);
  if (!form) return false;
  
  const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');
  let isValid = true;
  
  inputs.forEach(input => {
    if (!input.value.trim()) {
      input.classList.add('is-invalid');
      isValid = false;
    } else {
      input.classList.remove('is-invalid');
    }
  });
  
  // Email validation
  const emailInputs = form.querySelectorAll('input[type="email"]');
  emailInputs.forEach(input => {
    if (input.value && !isValidEmail(input.value)) {
      input.classList.add('is-invalid');
      isValid = false;
    }
  });
  
  return isValid;
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Show loading state
function showLoading(buttonElement) {
  const originalText = buttonElement.textContent;
  buttonElement.innerHTML = '<span class="loading"></span> ' + (currentLang === 'ar' ? 'جاري التحميل...' : 'Loading...');
  buttonElement.disabled = true;
  
  return function hideLoading() {
    buttonElement.textContent = originalText;
    buttonElement.disabled = false;
  };
}

// Utility functions
function formatDate(dateString, lang = currentLang) {
  const date = new Date(dateString);
  const options = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  };
  
  if (lang === 'ar') {
    return date.toLocaleDateString('ar-SA', options);
  } else {
    return date.toLocaleDateString('en-US', options);
  }
}

function truncateText(text, maxLength) {
  if (text.length <= maxLength) return text;
  return text.substr(0, maxLength) + '...';
}

// Export functions for global use
window.switchLanguage = switchLanguage;
window.validateForm = validateForm;
window.showLoading = showLoading;
window.formatDate = formatDate;
window.truncateText = truncateText;

