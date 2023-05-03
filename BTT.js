// ==UserScript==
// @name         一键回到顶部
// @namespace    http://tampermonkey.net/
// @author       Chat GPT
// @version      无数次
// @description  在页面右下角添加一个一键回到顶部的按钮，点击即可回到页面顶部，并有平滑滚动效果，同时会根据页面背景颜色自动调整颜色。长按0.5秒回到底部，按钮有缩放效果。
// @icon         data:image/png;base64,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
// @match        *
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

  // 创建按钮元素
  const button = document.createElement('div');
  button.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 8.586l-7.707 7.707a.999.999 0 1 0 1.414 1.414L12 11.414l6.293 6.293a.999.999 0 1 0 1.414-1.414L12 8.586z" fill="none" stroke="currentColor" stroke-width="2"/></svg>';
  button.classList.add('GO_TO_TOP_button');

  // 设置按钮样式
  button.style.position = 'fixed'; // 设置按钮的定位方式为固定定位
  button.style.bottom = '25px'; // 设置按钮距离底部的距离
  button.style.right = '10px'; // 设置按钮距离右侧的距离
  button.style.zIndex = '999999'; // 设置按钮的层级
  button.style.width = '45px'; // 设置按钮的宽度
  button.style.height = '45px'; // 设置按钮的高度
  button.style.borderRadius = '50%'; // 设置按钮为圆形
  button.style.fontSize = '24px'; // 设置按钮字体大小
  button.style.opacity = '0'; // 设置按钮的透明度为 0
  button.style.transition = 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out'; // 设置按钮的过渡效果
  button.style.border = '2px solid transparent'; // 设置按钮的边框宽度和颜色

  // 将按钮添加到页面中
  document.body.appendChild(button);

  let timeoutId; // 定义一个变量用于存储 setTimeout 的返回值
  let isLongPressed = false; // 定义一个变量用于标记是否长按触发

  // 当触摸屏幕时
  button.addEventListener('touchstart', () => {
    timeoutId = setTimeout(() => {
      isLongPressed = true;
      goToBottom(); // 长按时触发回到底部操作
      button.style.transform = 'scale(1.4)'; // 按钮缩放效果
      setTimeout(() => {
        button.style.transform = 'scale(1)';
      }, 300);
    }, 500);
  });

  // 当手指离开屏幕时
  button.addEventListener('touchend', () => {
    clearTimeout(timeoutId); // 清除之前的定时器

    if (!isLongPressed) {
      goToTop(); // 点击时触发回到顶部操作
      button.style.transform = 'scale(1.4)'; // 按钮缩放效果
      setTimeout(() => {
        button.style.transform = 'scale(1)';
      }, 300);
    } else {
      isLongPressed = false;
      button.style.transform = 'scale(1.4)'; // 按钮缩放效果
      setTimeout(() => {
        button.style.transform = 'scale(1)';
      }, 300);
    }
  });

  // 回到顶部操作
  function goToTop() {
    const scrollDuration = 300; // 滚动时间
    const scrollStep = -window.scrollY / (scrollDuration / 15); // 计算每一步滚动的距离
    const scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep); // 每一步执行滚动操作
      } else {
        clearInterval(scrollInterval); // 滚动到顶部，清除定时器
      }
    }, 15);
  }

  // 回到底部操作
  function goToBottom() {
    const scrollDuration = 300; // 滚动时间
    const scrollStep = (document.documentElement.scrollHeight - window.innerHeight) / (scrollDuration / 15); // 计算每一步滚动的距离
    const scrollInterval = setInterval(() => {
      if (window.innerHeight + window.pageYOffset < document.documentElement.scrollHeight) {
        window.scrollBy(0, scrollStep); // 每一步执行滚动操作
      } else {
        clearInterval(scrollInterval); // 滚动到底部，清除定时器
      }
    }, 15);
  }

  let isScrolling = false;

  // 当页面滚动时
  window.addEventListener('scroll', () => {
    clearTimeout(timeoutId); // 每次滚动时清除之前的定时器

    if (!isScrolling) {
      isScrolling = true;
      button.style.opacity = '1'; // 显示按钮
    }

    // 如果滚动静止超过 2.5 秒，则隐藏按钮
    timeoutId = setTimeout(() => {
      button.style.opacity = '0'; // 隐藏按钮
      isScrolling = false;
    }, 2500);
  });

  // 计算两个颜色之间的对比度
  function getContrastRatio(color1, color2) {
    const luminance1 = getRelativeLuminance(color1);
    const luminance2 = getRelativeLuminance(color2);
    const lighter = Math.max(luminance1, luminance2);
    const darker = Math.min(luminance1, luminance2);
    return (lighter + 0.05) / (darker + 0.05);
  }

  // 计算相对亮度
  function getRelativeLuminance(color) {
    const rgb = color.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    const r = rgb[1] / 255;
    const g = rgb[2] / 255;
    const b = rgb[3] / 255;
    const rs = r <= 0.03928 ? r / 12.92 : Math.pow(((r + 0.055) / 1.055), 2.4);
    const gs = g <= 0.03928 ? g / 12.92 : Math.pow(((g + 0.055) / 1.055), 2.4);
    const bs = b <= 0.03928 ? b / 12.92 : Math.pow(((b + 0.055) / 1.055), 2.4);
    return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
  }
  
  // 获取页面背景颜色，并根据对比度自动调整按钮样式
  const bgColor = getComputedStyle(document.body).backgroundColor;
  const contrastRatio = getContrastRatio(bgColor, 'rgb(255, 255, 255)');
  
  if (contrastRatio >= 4.5) {
    button.style.color = '#fff';
    button.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
  } else {
    button.style.color = '#000';
    button.style.backgroundColor = 'rgba(255, 255, 255, 0.6)';
  }
})();
