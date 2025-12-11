# 📍 Venue & Comment Management API
![Status](https://img.shields.io/badge/status-Active-success.svg)
![Deployment](https://img.shields.io/badge/deployment-Vercel-black.svg)

## 📖 Proje Hakkında (About the Project)

Bu proje, mekanlar (venues) ve bu mekanlara yapılan yorumları (comments) yönetmek için geliştirilmiş kapsamlı bir RESTful API servisidir. Kullanıcılar mekan ekleyebilir, güncelleyebilir, silebilir ve konum tabanlı olarak yakındaki mekanları listeleyebilirler.

🚀 **Canlı Demo / Live URL:** [https://backend-drab-nu-66.vercel.app/](https://backend-drab-nu-66.vercel.app/)

---

## 🛠 Özellikler (Features)

- **Mekan Yönetimi**: Mekan ekleme, düzenleme, görüntüleme ve silme.
- **Lokasyon Servisleri**: Koordinatlara göre yakındaki mekanları listeleme.
- **Yorum Sistemi**: Mekanlara yorum yapma, yorumları güncelleme ve silme.
- **Yüksek Performans**: Vercel üzerinde hızlı ve güvenilir altyapı.

---
---

## 🚀 Kurulum ve Çalıştırma (Installation & Setup)

Projeyi yerel ortamınızda çalıştırmak için aşağıdaki adımları izleyin:

\`\`\`bash
# Depoyu klonlayın
git clone <repo-url>

# Dizin içine girin
cd project-directory

# Bağımlılıkları yükleyin
npm install

# Projeyi başlatın
npm start
\`\`\`

---
## 📸 API Uç Noktaları ve Görseller (API Endpoints & Visuals)

Aşağıda API'nin sunduğu temel fonksiyonların kullanım örnekleri ve ekran görüntüleri yer almaktadır.

### 🏢 Mekan İşlemleri (Venue Operations)

#### 1. Mekan Ekleme (Add Venue)
Yeni bir mekan oluşturmak için kullanılır.
![Add Venue](tests/addVenue.bmp)

#### 2. Mekan Getirme (Get Venue)
ID ile belirli bir mekanın detaylarını getirir.
![Get Venue](tests/getVenue.bmp)

#### 3. Yakındaki Mekanları Listeleme (List Nearby Venues)
Belirli bir koordinat çevresindeki mekanları listeler.
![List Nearby Venues](tests/listNearbyVenues.bmp)

#### 4. Mekan Güncelleme (Update Venue)
Mevcut bir mekanın bilgilerini günceller.
![Update Venue](tests/updateVenue.bmp)

#### 5. Mekan Silme (Delete Venue)
Bir mekanı sistemden kaldırır.
![Delete Venue](tests/deleteVenue.bmp)

---

### 💬 Yorum İşlemleri (Comment Operations)

#### 1. Yorum Ekleme (Add Comment)
Bir mekana yeni bir yorum ekler.
![Add Comment](tests/addComment.bmp)

#### 2. Yorum Getirme (Get Comment)
Tekil bir yorumun detaylarını getirir.
![Get Comment](tests/getComment.bmp)

#### 3. Yorum Güncelleme (Update Comment)
Yapılan bir yorumu düzenler.
![Update Comment](tests/updateComment.bmp)

#### 4. Yorum Silme (Delete Comment)
Bir yorumu siler.
![Delete Comment](tests/deleteComment.bmp)




