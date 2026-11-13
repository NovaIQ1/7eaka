# أكاديمية الأشغال اليدوية — قسم الكروشيه

موقع تعليمي ثابت (HTML/CSS/JS بدون أي خادم أو قاعدة بيانات) لتعلّم الكروشيه خطوة بخطوة، من حلقة البداية إلى مربع الكرانيت والوشاح والقبعة والجاكيت.

## محتوى الموقع

- `index.html` — الصفحة الرئيسية وخارطة الدروس (9 دروس / 4 مراحل)
- `lessons/` — صفحة مستقلة لكل درس (فيديو + صور + خطوات مكتوبة)
- `assets/css/style.css` — تنسيق الموقع بالكامل
- `assets/js/main.js` — تتبّع تقدّمك في الدروس عبر المتصفح (localStorage)
- `assets/img/` — مكان الصور التوضيحية لكل درس

## كيف تضيفين الصور

كل درس فيه مربعات بخط متقطّع مكتوب عليها اسم الملف المتوقع، مثل:

```
assets/img/slip-knot/step1.jpg
```

يكفي أن تضعي صورك داخل `assets/img/<اسم الدرس>/` بنفس الأسماء، ثم تستبدلي الصندوق المتقطّع (`<div class="img-placeholder">...`) في ملف HTML الخاص بالدرس بوسم صورة عادي:

```html
<img src="../assets/img/slip-knot/step1.jpg" alt="الخطوة 1">
```

## كيف تضيفين فيديو يوتيوب

داخل كل ملف درس يوجد تعليق HTML فوق مربع الفيديو يوضّح بالضبط كيف تستبدلينه برابط يوتيوب حقيقي، مثل:

```html
<iframe src="https://www.youtube.com/embed/VIDEO_ID" title="عنوان الدرس" allowfullscreen></iframe>
```

## رفع الموقع على GitHub وعرضه كموقع (GitHub Pages)

1. أنشئي مستودع (repository) جديد على GitHub، مثلًا باسم `handmade-academy`.
2. من داخل هذا المجلد، نفّذي الأوامر التالية (كل أمر في سطر مستقل):

```bash
git init
```

```bash
git add .
```

```bash
git commit -m "الموقع الأولي: دروس الكروشيه"
```

```bash
git branch -M main
```

```bash
git remote add origin https://github.com/USERNAME/handmade-academy.git
```

```bash
git push -u origin main
```

(استبدلي `USERNAME` باسم حسابك على GitHub، و`handmade-academy` باسم المستودع الذي أنشأتِه إن كان مختلفًا)

3. داخل صفحة المستودع على GitHub، اذهبي إلى: **Settings → Pages**.
4. تحت **Source** اختاري **Deploy from a branch**، ثم اختاري الفرع **main** والمجلد **/ (root)**، واضغطي **Save**.
5. بعد دقيقة أو دقيقتين، سيظهر رابط الموقع في نفس الصفحة بالشكل:

```
https://USERNAME.github.io/handmade-academy/
```

الموقع بالكامل HTML/CSS/JS بدون أي خطوة بناء (build step)، لذلك لا حاجة لأي إعدادات إضافية في GitHub Actions — خيار **Deploy from a branch** يكفي وحده.

## ملاحظة عن التوسّع لاحقًا

تم تصميم الموقع تحت مسمّى عام "أكاديمية الأشغال اليدوية" حتى يسهل إضافة أقسام جديدة لأعمال يدوية أخرى (تطريز، خياطة، إلخ) في مجلدات مستقلة بجانب `lessons/` مستقبلًا، دون التأثير على قسم الكروشيه الحالي.
