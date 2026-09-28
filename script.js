document.addEventListener("DOMContentLoaded", () => {
  const projects = {
    tess: {
      title: "TESS SoftPOS Payment Platform",
      type: "SoftPOS / Payments",
      summary:
        "A secure merchant payment platform for accepting card and wallet payments from an Android mobile app, managing transactions, processing refunds and voids, and monitoring merchant activity through backend APIs and admin tools.",
      role: "Android + Backend Developer",
      focus: "SoftPOS, payments, backend APIs",
      platform: "Android / NestJS",
      tags: ["Kotlin", "Jetpack Compose", "QNB SoftPOS SDK", "NestJS", "Prisma", "PostgreSQL", "JWT"],
      link: "",
      images: [
        {
          src: "assets/portfolio/screenshots/tess/admin-dashboard.png",
          alt: "TESS SoftPOS admin dashboard",
          caption: "Admin dashboard for payment totals, merchant activity, transaction ratio, and operational monitoring.",
        },
        {
          src: "assets/portfolio/screenshots/tess/home.jpg",
          alt: "TESS SoftPOS merchant home screen",
          caption: "Merchant home screen with today's sales, new payment entry, merchant status, and account actions.",
        },
        {
          src: "assets/portfolio/screenshots/tess/login.jpg",
          alt: "TESS SoftPOS login screen",
          caption: "Merchant login with password entry, Touch ID, PIN code quick login, and PCI DSS trust marker.",
        },
        {
          src: "assets/portfolio/screenshots/tess/reports.jpg",
          alt: "TESS SoftPOS reports screen",
          caption: "Reports dashboard with collected amount, approved/declined metrics, filters, and recent payments.",
        },
        {
          src: "assets/portfolio/screenshots/tess/payment-entry.jpg",
          alt: "TESS SoftPOS new payment amount entry screen",
          caption: "New payment flow with amount entry, validation, keypad, and charge action.",
        },
        {
          src: "assets/portfolio/screenshots/tess/tap-to-pay.jpg",
          alt: "TESS SoftPOS tap-to-pay terminal preparation screen",
          caption: "QNB SoftPOS tap-to-pay flow preparing a secure terminal for contactless card payment.",
        },
        {
          src: "assets/portfolio/screenshots/tess/settings.jpg",
          alt: "TESS SoftPOS settings screen",
          caption: "Settings for theme, language, Touch ID, PIN unlock, payment sounds, and secure logout.",
        },
      ],
      points: [
        "Built a native Android SoftPOS app using Kotlin and Jetpack Compose with a custom TESS theme.",
        "Integrated QNB SoftPOS SDK for tap-to-pay card acceptance from an Android merchant device.",
        "Implemented merchant login, JWT session handling, PIN quick unlock, biometric unlock, secure logout, and credential clearing.",
        "Delivered payment, refund, void, reports, transaction filters, date range picker, dark/light mode, and English/Arabic RTL support.",
        "Built and maintained NestJS backend APIs for authentication, merchant configuration, terminals, QNB configuration, transactions, refunds, voids, and admin operations.",
        "Implemented access/refresh tokens, refresh-token rotation, logout revocation, role-based access control, password reset, audit logs, and Swagger API documentation.",
        "Modeled PostgreSQL data with Prisma and connected mobile/backend flows for payment creation, transaction status updates, refunds, reporting, and admin dashboards.",
      ],
    },
    avatalk: {
      title: "AVAtalk / Avatar Therapy",
      type: "iOS / Avatar Therapy",
      summary:
        "An interactive avatar-based therapy app for live therapist and patient sessions on iOS and iPadOS. Therapists can run calls using their real camera or a 3D animated avatar, customize avatar appearance, apply live voice effects, record sessions, and keep patient-side room states synchronized.",
      role: "iOS Developer",
      focus: "AR avatars, Agora RTC, audio",
      platform: "iOS / iPadOS",
      tags: ["Swift", "UIKit", "ARKit", "RealityKit", "Agora RTC", "AVFoundation", "TestFlight"],
      link: "",
      images: [
        {
          src: "assets/portfolio/screenshots/avatalk/appointments.png",
          alt: "AVAtalk appointments screen",
          caption: "Therapy appointment list with scheduled and completed sessions for therapist workflow.",
        },
        {
          src: "assets/portfolio/screenshots/avatalk/avatar-studio-male.png",
          alt: "AVAtalk avatar studio male avatar customization screen",
          caption: "AVATAR Studio with male avatar asset, hair options, and live voice effect settings.",
        },
        {
          src: "assets/portfolio/screenshots/avatalk/avatar-studio-female.png",
          alt: "AVAtalk avatar studio female avatar customization screen",
          caption: "Female avatar customization with skin, age, hair, pitch, reverb, and voice-tone controls.",
        },
        {
          src: "assets/portfolio/screenshots/avatalk/therapy-room.png",
          alt: "AVAtalk live therapy room screen",
          caption: "Live therapy room with avatar video, recording controls, transcript panel, and room switching.",
        },
      ],
      points: [
        "Delivered therapist and patient room experiences for live avatar-based therapy sessions.",
        "Integrated Agora RTC with custom external video tracks so a rendered 3D avatar could be streamed instead of only camera video.",
        "Worked with RealityKit, SceneKit, and ARKit avatar rendering, including updated male and female 3D assets from the artist.",
        "Improved avatar realism through facial animation fixes for mouth, teeth, lip movement, eyebrows, and expression handling.",
        "Fixed camera/avatar switching between AVATAR Studio and Therapy Room so therapists can move between editing and live sessions smoothly.",
        "Synchronized therapist AVATAR Studio state to the patient side in read-only mode and added patient status messaging during avatar edits.",
        "Improved live voice transformation with pitch, tone, reverb, preview, and headphone-only self-monitor validation to reduce echo risk.",
        "Worked on recording flow, send-to-patient architecture, TestFlight builds, build number updates, QA feedback, and iPhone/iPad layout fixes.",
      ],
    },
    overify: {
      title: "Overify",
      type: "Identity verification SDK",
      summary:
        "A complete identity verification SDK for products that need fast onboarding without sacrificing trust. The flow guides users through document scanning, NFC chip reading, face matching, and liveness checks so businesses can verify real people with fewer manual reviews.",
      role: "Senior Mobile Developer",
      focus: "OCR, NFC, liveness",
      platform: "Android / SDK",
      tags: ["AI", "NFC", "OCR", "MRZ", "Liveness"],
      link: "",
      images: [
        {
          src: "assets/portfolio/screenshots/overify-sdk/overview.png",
          alt: "Overify document scanning and identity verification screens",
          caption: "Guided document scanning flow with front/back capture and clear completion states.",
        },
        {
          src: "assets/portfolio/screenshots/overify-sdk/scan-id.png",
          alt: "Overify scan ID step with OCR data extraction",
          caption: "Step 1: scan the ID so OCR and computer vision can extract data instantly.",
        },
        {
          src: "assets/portfolio/screenshots/overify-sdk/nfc-chip.png",
          alt: "Overify NFC chip reading step",
          caption: "Step 2: tap and hold the document NFC chip to confirm authenticity.",
        },
        {
          src: "assets/portfolio/screenshots/overify-sdk/face-liveness.png",
          alt: "Overify face match and liveness verification step",
          caption: "Step 3: face match and liveness checks help reduce identity fraud.",
        },
      ],
      points: [
        "Built the customer-facing verification journey from first scan to final identity check, keeping each step simple enough for non-technical users.",
        "Implemented OCR and computer-vision document capture so ID data can be extracted quickly and accurately.",
        "Supported NFC chip reading, MRZ/VIZ parsing, face matching, and liveness checks to help clients reduce fraud risk.",
        "Designed clear guidance, retry states, and recovery paths so failed scans do not become failed onboarding.",
        "Kept the SDK experience reusable and secure, making it practical for businesses that need identity verification inside their own apps.",
      ],
    },
    staypri: {
      title: "STAYPRI VPN",
      type: "Cybersecurity / VPN",
      summary:
        "A privacy-first VPN app built around fast connection, clear server choice, and trustworthy subscription flows. The product needed to feel secure, simple, and reliable for users who care about privacy but do not want a complex technical interface.",
      role: "Senior Mobile Developer",
      focus: "VPN UX, privacy, subscriptions",
      platform: "Android",
      tags: ["VPN", "Security", "Privacy", "Premium"],
      link: "https://play.google.com/store/apps/details?id=com.staypri.vpn",
      images: [
        {
          src: "assets/portfolio/screenshots/vpn/overview.png",
          alt: "STAYPRI VPN app screens",
          caption: "VPN connection, server selection, subscription, and privacy-focused product screens.",
        },
        {
          src: "assets/portfolio/screenshots/vpn/home.png",
          alt: "STAYPRI VPN home connection screen",
          caption: "Primary connection state with tap-to-connect interaction and privacy positioning.",
        },
        {
          src: "assets/portfolio/screenshots/vpn/connect.png",
          alt: "STAYPRI VPN connect flow",
          caption: "Connection flow with clear status feedback for secure VPN usage.",
        },
        {
          src: "assets/portfolio/screenshots/vpn/location.png",
          alt: "STAYPRI VPN location selection screen",
          caption: "Server and location selection so users can quickly choose a VPN endpoint.",
        },
        {
          src: "assets/portfolio/screenshots/vpn/premium.png",
          alt: "STAYPRI VPN premium screen",
          caption: "Premium and subscription screen for paid VPN access.",
        },
        {
          src: "assets/portfolio/screenshots/vpn/servers.png",
          alt: "STAYPRI VPN server list",
          caption: "VPN server list and country selection experience.",
        },
        {
          src: "assets/portfolio/screenshots/vpn/settings.png",
          alt: "STAYPRI VPN settings screen",
          caption: "Settings and account-oriented VPN app screen.",
        },
      ],
      points: [
        "Built the main VPN connection experience with obvious connected, disconnected, loading, and error states.",
        "Created server-selection flows that help users understand location choice without adding unnecessary friction.",
        "Implemented premium and subscription-facing screens with trust-focused privacy messaging.",
        "Handled security-sensitive UX details where unclear wording or unstable states can reduce user confidence.",
        "Focused on polished mobile interactions so the product feels dependable during repeated daily use.",
      ],
    },
    mintroute: {
      title: "MintRoute",
      type: "Retail / E-vouchers",
      summary:
        "A merchant-focused retail platform for selling top-ups, gaming cards, and e-vouchers. The app supports fast product lookup, real-time transaction verification, Arabic localization, discounts, and Bluetooth thermal receipt printing for real retail counters.",
      role: "Android Developer",
      focus: "Top-up, vouchers, printing",
      platform: "Android",
      tags: ["Java", "Thermal Printer", "Retail", "Localization"],
      link: "https://www.mintroute.com/",
      images: [
        {
          src: "assets/portfolio/screenshots/mintroute/app-overview.png",
          alt: "MintRoute e-voucher and retail top-up app screens",
          caption: "Selected MintRoute screens for merchant top-up, voucher sales, and retail workflows.",
        },
        {
          src: "assets/portfolio/screenshots/mintroute/home.png",
          alt: "MintRoute app home screen",
          caption: "Retail dashboard and product discovery flow.",
        },
        {
          src: "assets/portfolio/screenshots/mintroute/screens.png",
          alt: "MintRoute product and transaction screens",
          caption: "Voucher selection, transaction handling, and retail app screens.",
        },
      ],
      points: [
        "Built voucher and top-up purchase flows that let merchants complete customer transactions quickly at the counter.",
        "Integrated Bluetooth thermal printer support so receipts can be printed directly from Android devices.",
        "Supported real-time verification and transaction status handling for payment-sensitive retail workflows.",
        "Worked on redesign and Arabic localization so the product fit the market and was easier for merchant users.",
        "Handled discounts, product categories, and practical sales screens that help retailers operate without extra tools.",
      ],
    },
    "drive-safe": {
      title: "Drive Safe",
      type: "Navigation / Safety",
      summary:
        "A road-safety and navigation product using Mapbox to help drivers plan safer routes, understand traffic conditions, and make better trip decisions. The app combines map interaction, location updates, and route guidance in a mobile-first experience.",
      role: "Android Developer",
      focus: "Mapbox, traffic, routing",
      platform: "Android",
      tags: ["Kotlin", "Mapbox", "Location", "Routing"],
      link: "",
      images: [
        {
          src: "assets/portfolio/screenshots/drive-safe/overview.png",
          alt: "Drive Safe app navigation screens",
          caption: "Route planning, map states, traffic awareness, and navigation-focused app screens.",
        },
        {
          src: "images/invozone/drivesfn/1.png",
          alt: "Drive Safe app screen 1",
          caption: "Drive Safe route and location experience.",
        },
        {
          src: "images/invozone/drivesfn/2.png",
          alt: "Drive Safe app screen 2",
          caption: "Navigation flow and map interaction.",
        },
        {
          src: "images/invozone/drivesfn/3.png",
          alt: "Drive Safe app screen 3",
          caption: "Safety-focused driving screen.",
        },
      ],
      points: [
        "Integrated Mapbox maps and navigation features for route planning, map movement, and location-based interaction.",
        "Built route options and traffic-aware screens so users can compare travel decisions before starting a trip.",
        "Handled location states and navigation UI details where accuracy, responsiveness, and clarity matter.",
        "Translated safety-focused business requirements into practical Android flows for drivers.",
        "Worked with client and business teams to turn an idea into screens that support real road-use behavior.",
      ],
    },
    "easy-move": {
      title: "EasyMove",
      type: "On-demand logistics",
      summary:
        "An on-demand logistics marketplace connecting customers with movers for apartment moves, furniture delivery, helper support, flat-cost negotiation, messaging, and payments. The app needed separate but connected experiences for customers and service providers.",
      role: "Android Developer",
      focus: "Marketplace, chat, payments",
      platform: "Android",
      tags: ["Kotlin", "Logistics", "Payments", "Chat", "Maps"],
      link: "https://play.google.com/store/apps/details?id=com.geteasymovecom.android",
      images: [
        {
          src: "assets/portfolio/screenshots/easymove/user-app-wide.png",
          alt: "EasyMove user app screens",
          caption: "User app flows for service selection, mover discovery, and delivery requests.",
        },
        {
          src: "assets/portfolio/screenshots/easymove/overview.png",
          alt: "EasyMove customer app overview",
          caption: "Customer-facing overview of service selection and moving request flows.",
        },
        {
          src: "assets/portfolio/screenshots/easymove/operations.png",
          alt: "EasyMove operations screens",
          caption: "Messaging, payments, and lifecycle management screens.",
        },
        {
          src: "assets/portfolio/screenshots/easymove/driver.png",
          alt: "EasyMove driver app screens",
          caption: "Mover-facing workflow for delivery jobs and driver operations.",
        },
        {
          src: "assets/portfolio/screenshots/easymove/user-app-more.png",
          alt: "EasyMove additional user app screens",
          caption: "Additional customer flows for request management and logistics actions.",
        },
        {
          src: "images/invozone/easymove/user_app/1.png",
          alt: "EasyMove sign in screen",
          caption: "Customer onboarding and account access.",
        },
        {
          src: "images/invozone/easymove/user_app/2.png",
          alt: "EasyMove home screen",
          caption: "Home service selection and request setup.",
        },
        {
          src: "images/invozone/easymove/driver_app/1.png",
          alt: "EasyMove driver app screen",
          caption: "Mover-facing workflow for delivery jobs.",
        },
      ],
      points: [
        "Built customer flows for selecting services, describing move details, choosing helpers, and sending delivery requests.",
        "Built mover-facing workflows for accepting jobs, managing delivery steps, and staying aligned with customer requests.",
        "Implemented location, messaging, payments, and service lifecycle states across both sides of the marketplace.",
        "Supported negotiation and flat-cost delivery flows so pricing and job expectations stay clear.",
        "Converted complex logistics requirements into mobile screens that feel usable during busy real-world moving tasks.",
      ],
    },
    keycar: {
      title: "Key Car Rental",
      type: "Travel / Booking",
      summary:
        "A car-rental booking app for customers who need a quick way to choose rental type, select pickup or delivery location, compare vehicles, add extras, and complete checkout. The experience supports city, airport, and daily travel needs.",
      role: "Android Developer",
      focus: "Rental flow, maps, checkout",
      platform: "Android",
      tags: ["Java", "Maps", "SQLite", "Payments"],
      link: "https://play.google.com/store/apps/details?id=comcom.key",
      images: [
        {
          src: "assets/portfolio/screenshots/keycar/overview.png",
          alt: "Key Car Rental booking app overview",
          caption: "Overview of the booking, maps, fleet, extras, and checkout workflow.",
        },
        {
          src: "assets/portfolio/screenshots/keycar/splash.png",
          alt: "Key Car Rental splash screen",
          caption: "Branded rental entry screen with the Rent Smartly positioning.",
        },
        {
          src: "assets/portfolio/screenshots/keycar/rent-options.png",
          alt: "Key Car Rental rent options screen",
          caption: "Daily, monthly, pickup, and delivery rental options for faster booking setup.",
        },
        {
          src: "assets/portfolio/screenshots/keycar/location.png",
          alt: "Key Car Rental location selection map",
          caption: "Map-based location selection for vehicle delivery and pickup planning.",
        },
        {
          src: "assets/portfolio/screenshots/keycar/fleet.png",
          alt: "Key Car Rental fleet selection screen",
          caption: "Fleet browsing with vehicle categories, rental rates, and booking actions.",
        },
        {
          src: "assets/portfolio/screenshots/keycar/extras.png",
          alt: "Key Car Rental extra services screen",
          caption: "Optional extras and add-ons before payment, including protection and services.",
        },
        {
          src: "assets/portfolio/keycar-case-01.png",
          alt: "Key Car Rental case study screens",
          caption: "Case-study visual showing the broader rental booking experience.",
        },
      ],
      points: [
        "Delivered the full rental journey from branded entry to rental options, vehicle selection, extras, and checkout.",
        "Built pickup and delivery location flows with map-based selection so users can plan where the vehicle should arrive.",
        "Created fleet browsing screens with vehicle categories, pricing, availability, and booking actions.",
        "Implemented checkout support for customer details, vouchers, add-ons, payment choices, and booking confirmation.",
        "Worked within a Java Android codebase using SQLite and MVC patterns, with payment gateway and push notification support.",
      ],
    },
    revbits: {
      title: "RevBits CIP & ZTN",
      type: "Zero-trust cybersecurity",
      summary:
        "Enterprise cybersecurity apps for secure authentication, zero-trust access, mobile approvals, and cyber-intelligence workflows. These products needed strong security features while still being understandable for administrators and end users.",
      role: "Android Developer",
      focus: "Authentication, security",
      platform: "Android",
      tags: ["Kotlin", "Biometrics", "YubiKey", "NFC U2F", "Firebase"],
      link: "https://www.revbits.com/",
      images: [
        {
          src: "images/invozone/ztn/1.png",
          alt: "RevBits ZTN login screen",
          caption: "ZTN login flow with password, iteration count, Touch ID, and QR scan entry points.",
        },
        {
          src: "images/invozone/ztn/2.png",
          alt: "RevBits ZTN authentication screen",
          caption: "Secure access flow for zero-trust network authentication.",
        },
        {
          src: "images/invozone/ztn/3.png",
          alt: "RevBits ZTN approval screen",
          caption: "Mobile approval experience for secure sign-in requests.",
        },
        {
          src: "images/invozone/ztn/4.png",
          alt: "RevBits ZTN app screen",
          caption: "ZTN user flow screen from the original app set.",
        },
        {
          src: "images/invozone/ztn/5.png",
          alt: "RevBits ZTN settings screen",
          caption: "Zero-trust access configuration and account experience.",
        },
        {
          src: "images/invozone/ztn/6.png",
          alt: "RevBits ZTN verification screen",
          caption: "Secure verification flow supporting protected enterprise access.",
        },
        {
          src: "images/invozone/cip/7.png",
          alt: "RevBits Cyber Intelligence Platform sign up and sign in screens",
          caption: "Old CIP case-study visual showing sign-up and sign-in screens.",
        },
        {
          src: "images/invozone/cip/1.png",
          alt: "RevBits CIP mobile screen",
          caption: "Cyber Intelligence Platform mobile experience from the original portfolio set.",
        },
        {
          src: "images/invozone/cip/2.png",
          alt: "RevBits CIP authentication screen",
          caption: "CIP authentication and secure account flow.",
        },
        {
          src: "images/invozone/cip/3.png",
          alt: "RevBits CIP account screen",
          caption: "Cybersecurity app account and verification screen.",
        },
        {
          src: "images/invozone/cip/4.png",
          alt: "RevBits CIP approval screen",
          caption: "CIP mobile approval and protected access workflow.",
        },
        {
          src: "images/invozone/cip/8.png",
          alt: "RevBits CIP mobile screen set",
          caption: "Old wide CIP app visual used to present the product screens.",
        },
        {
          src: "images/invozone/cip/9.png",
          alt: "RevBits CIP case-study visual",
          caption: "Original CIP case-study artwork with secure product flow screens.",
        },
        {
          src: "images/invozone/cip/10.png",
          alt: "RevBits CIP app flow visual",
          caption: "Additional old CIP product visual from the existing portfolio images.",
        },
        {
          src: "images/invozone/cip/11.png",
          alt: "RevBits CIP app screens visual",
          caption: "Cyber Intelligence Platform screen collection from the old portfolio set.",
        },
      ],
      points: [
        "Built secure authentication flows using biometrics, OTP, SMS, YubiKey, and NFC U2F support.",
        "Implemented QR-based authentication and mobile login approval flows for protected enterprise access.",
        "Worked on ZTN experiences where users need to verify identity before reaching protected network resources.",
        "Supported CIP screens for cyber-intelligence workflows, account access, and security administration.",
        "Handled trust-critical UX details so security actions are clear, verifiable, and difficult to misunderstand.",
      ],
    },
    wbrz: {
      title: "WBRZ Local News",
      type: "Media / Local news",
      summary:
        "A local media experience for news, weather, sports, video, and live content. The app needed to make frequent content consumption simple across mobile and TV-style browsing patterns.",
      role: "Mobile Developer",
      focus: "Content, playback, TV",
      platform: "Mobile / TV",
      tags: ["Media", "News", "Playback", "Content"],
      link: "",
      images: [
        {
          src: "assets/portfolio/screenshots/wbrz/overview.png",
          alt: "WBRZ local news TV app screens",
          caption: "News, weather, sports, and live content screens for WBRZ.",
        },
        {
          src: "assets/portfolio/screenshots/wbrz/news-grid.png",
          alt: "WBRZ news grid screen",
          caption: "Local news browsing with quick access to fresh stories and categories.",
        },
        {
          src: "assets/portfolio/screenshots/wbrz/video-list.png",
          alt: "WBRZ video and content list screen",
          caption: "Playback-oriented content list for video and local updates.",
        },
        {
          src: "assets/portfolio/screenshots/wbrz/weather.png",
          alt: "WBRZ weather screen",
          caption: "Weather and local updates screen for frequent user visits.",
        },
        {
          src: "assets/portfolio/screenshots/wbrz/tv-detail.png",
          alt: "WBRZ TV detail screen",
          caption: "TV-style detail screen from the WBRZ app experience.",
        },
      ],
      points: [
        "Built content browsing flows for news, weather, sports, and live local updates.",
        "Supported playback-oriented screens where quick access and readable hierarchy matter.",
        "Worked on layouts that help users move from headlines to detailed content without confusion.",
        "Considered frequent-use behavior, because local news users often return multiple times per day.",
        "Helped deliver a media product that presents changing content clearly across sections.",
      ],
    },
    "seven-speaking": {
      title: "7Speaking",
      type: "EdTech / Language learning",
      summary:
        "A language-learning and training app focused on course access, lesson consumption, practice flows, and progress-oriented learning screens. The product needed stable content delivery and simple navigation for repeated training use.",
      role: "Android Developer",
      focus: "Learning flows, content access",
      platform: "Android",
      tags: ["Android", "EdTech", "Training", "Content", "Push"],
      link: "",
      images: [
        {
          src: "images/invozone/7Speaking/1.png",
          alt: "7Speaking app screen 1",
          caption: "Language-learning product screen from the older portfolio set.",
        },
        {
          src: "images/invozone/7Speaking/2.png",
          alt: "7Speaking app screen 2",
          caption: "Course and content access experience.",
        },
        {
          src: "images/invozone/7Speaking/3.png",
          alt: "7Speaking app screen 3",
          caption: "Training flow screen for learning content.",
        },
        {
          src: "images/invozone/7Speaking/4.png",
          alt: "7Speaking app screen 4",
          caption: "Lesson and practice-oriented mobile screen.",
        },
        {
          src: "images/invozone/7Speaking/5.png",
          alt: "7Speaking app screen 5",
          caption: "Learning app screen from the original project images.",
        },
        {
          src: "images/invozone/7Speaking/6.png",
          alt: "7Speaking app screen 6",
          caption: "Additional training and content-access flow.",
        },
        {
          src: "images/invozone/7Speaking/7.png",
          alt: "7Speaking app screen 7",
          caption: "Mobile learning interface and user progression screen.",
        },
        {
          src: "images/invozone/7Speaking/8.png",
          alt: "7Speaking app screen 8",
          caption: "Course delivery screen from the old portfolio set.",
        },
        {
          src: "images/invozone/7Speaking/9.png",
          alt: "7Speaking app screen 9",
          caption: "Language training product screen.",
        },
        {
          src: "images/invozone/7Speaking/10.png",
          alt: "7Speaking app screen 10",
          caption: "Additional 7Speaking mobile screen from the original project images.",
        },
      ],
      points: [
        "Worked on mobile learning flows for course access, lesson screens, and training content.",
        "Supported content-heavy app areas where simple navigation and repeat usage are critical.",
        "Integrated production app behavior around notifications, content access, and user progression.",
        "Handled fixes and iteration across a stakeholder-driven EdTech product.",
      ],
    },
    invochat: {
      title: "InvoChat",
      type: "React Native communication app",
      summary:
        "A React Native workplace communication and collaboration app for internal teams. The product focused on messaging-oriented workflows, account screens, notification behavior, and practical day-to-day communication flows across mobile platforms.",
      role: "React Native Developer",
      focus: "Messaging, collaboration",
      platform: "iOS / Android",
      tags: ["React Native", "Firebase", "Push", "Messaging", "Collaboration"],
      link: "",
      images: [
        {
          src: "images/invozone/invochat/1.png",
          alt: "InvoChat app screen 1",
          caption: "Workplace communication and collaboration screen.",
        },
        {
          src: "images/invozone/invochat/2.png",
          alt: "InvoChat app screen 2",
          caption: "InvoChat mobile workflow screen from the old project set.",
        },
        {
          src: "images/invozone/invochat/3.png",
          alt: "InvoChat app screen 3",
          caption: "Team communication and account-oriented flow.",
        },
        {
          src: "images/invozone/invochat/4.png",
          alt: "InvoChat app screen 4",
          caption: "Collaboration app screen for repeated workplace use.",
        },
        {
          src: "images/invozone/invochat/5.png",
          alt: "InvoChat app screen 5",
          caption: "Additional InvoChat screen from the original portfolio assets.",
        },
      ],
      points: [
        "Delivered React Native app features for workplace communication and collaboration workflows.",
        "Supported Firebase, push notifications, and production mobile behavior for team use.",
        "Worked on cross-platform screen polish, fixes, and stakeholder-requested changes.",
        "Focused on predictable interaction patterns for daily business communication.",
      ],
    },
    "bp-better": {
      title: "BP Better",
      type: "USA client native mobile app",
      summary:
        "A USA client product delivered as native Android and native iOS apps. The business-support experience included content access, notification-led engagement, WebView-heavy product areas, and stakeholder-facing delivery across both platforms.",
      role: "Native Mobile Developer",
      focus: "Android, iOS, business content",
      platform: "Native Android / Native iOS",
      tags: ["Android", "iOS", "Native", "WebViews", "Firebase", "Push"],
      link: "",
      images: [
        {
          src: "images/invozone/bbbetter/1.png",
          alt: "BP Better app screen 1",
          caption: "BP Better business content and notification experience.",
        },
        {
          src: "images/invozone/bbbetter/2.png",
          alt: "BP Better app screen 2",
          caption: "Business-support mobile flow from the original project images.",
        },
        {
          src: "images/invozone/bbbetter/3.png",
          alt: "BP Better app screen 3",
          caption: "Additional BP Better screen showing the enterprise app experience.",
        },
      ],
      points: [
        "Worked on native Android and iOS screens for a USA client product focused on business content and user engagement.",
        "Handled WebView-heavy flows, Firebase behavior, push notifications, and support fixes across the mobile experience.",
        "Converted stakeholder requirements into practical native app screens with clean navigation and readable states.",
        "Kept business-support flows reliable for repeated client and internal use.",
      ],
    },
    ajooba: {
      title: "Ajooba",
      type: "Consumer Android app",
      summary:
        "A consumer Android app from the older portfolio with multi-screen account and product flows. The project demonstrates earlier production delivery across practical Android UI, API-driven screens, and release-focused app work.",
      role: "Android Developer",
      focus: "Consumer flows, Android UI",
      platform: "Android",
      tags: ["Android", "Java", "API Integration", "UI", "Consumer App"],
      link: "",
      images: [
        {
          src: "images/elementary/ajooba/1.png",
          alt: "Ajooba app screen 1",
          caption: "Ajooba mobile app screen from the old portfolio set.",
        },
        {
          src: "images/elementary/ajooba/2.png",
          alt: "Ajooba app screen 2",
          caption: "Consumer app workflow and account-oriented screen.",
        },
        {
          src: "images/elementary/ajooba/3.png",
          alt: "Ajooba app screen 3",
          caption: "Ajooba Android flow screen.",
        },
        {
          src: "images/elementary/ajooba/4.png",
          alt: "Ajooba app screen 4",
          caption: "Additional Ajooba project screen from the original image folder.",
        },
        {
          src: "images/elementary/ajooba/5.png",
          alt: "Ajooba app screen 5",
          caption: "Consumer product screen from the old portfolio assets.",
        },
        {
          src: "images/elementary/ajooba/6.png",
          alt: "Ajooba app screen 6",
          caption: "Ajooba app flow screen.",
        },
      ],
      points: [
        "Delivered Android screens across a consumer-facing product workflow.",
        "Worked with API-driven app behavior, UI implementation, and mobile flow integration.",
        "Handled practical production tasks across account, browse, and interaction screens.",
        "Strengthened early Android delivery experience across real client app requirements.",
      ],
    },
    "sts-payone": {
      title: "STS PayOne SDK",
      type: "Payment SDK",
      summary:
        "An encrypted merchant payment SDK project for Android transaction workflows. The work focused on secure payment-screen delivery, integration readiness, and SDK-style reliability for merchant transaction use cases.",
      role: "Android Developer",
      focus: "Payment SDK, encryption",
      platform: "Android / SDK",
      tags: ["Android", "Java", "Payments", "SDK", "Encryption"],
      link: "",
      images: [
        {
          src: "images/astute/sts-sdk/1.png",
          alt: "STS PayOne SDK payment screens",
          caption: "Old STS PayOne SDK visual showing merchant payment transaction screens.",
        },
      ],
      points: [
        "Worked on encrypted payment SDK flows for merchant transaction use cases.",
        "Supported Android payment-screen delivery with SDK-style integration requirements.",
        "Handled secure transaction UX where clarity and reliability matter for merchants.",
        "Delivered early payment-domain experience that connects well with later SoftPOS and wallet work.",
      ],
    },
  };

  if (window.lucide) {
    window.lucide.createIcons();
  }

  const navToggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".site-nav");
  const navLinks = Array.from(document.querySelectorAll(".site-nav a"));

  const closeNav = () => {
    if (!navToggle || !nav) {
      return;
    }

    nav.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Open navigation");
  };

  if (navToggle && nav) {
    navToggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
      navToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
    });

    navLinks.forEach((link) => {
      link.addEventListener("click", closeNav);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeNav();
      }
    });

    document.addEventListener("click", (event) => {
      if (!nav.classList.contains("open")) {
        return;
      }

      if (!nav.contains(event.target) && !navToggle.contains(event.target)) {
        closeNav();
      }
    });
  }

  const sections = navLinks
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  if ("IntersectionObserver" in window && sections.length > 0) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          navLinks.forEach((link) => {
            link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
          });
        });
      },
      {
        rootMargin: "-42% 0px -52% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));
  }

  const modal = document.querySelector("#project-modal");
  const modalImage = document.querySelector("#modal-image");
  const modalCount = document.querySelector("#modal-count");
  const modalCaption = document.querySelector("#modal-caption");
  const modalType = document.querySelector("#modal-type");
  const modalTitle = document.querySelector("#modal-title");
  const modalSummary = document.querySelector("#modal-summary");
  const modalRole = document.querySelector("#modal-role");
  const modalFocus = document.querySelector("#modal-focus");
  const modalPlatform = document.querySelector("#modal-platform");
  const modalPoints = document.querySelector("#modal-points");
  const modalTags = document.querySelector("#modal-tags");
  const modalLink = document.querySelector("#modal-link");
  const previousButtons = document.querySelectorAll("[data-slide-prev]");
  const nextButtons = document.querySelectorAll("[data-slide-next]");
  let activeProject = null;
  let activeSlide = 0;
  let lastFocusedElement = null;

  const renderSlide = () => {
    if (!activeProject || !modalImage || !modalCount || !modalCaption) {
      return;
    }

    const slides = activeProject.images;
    const slide = slides[activeSlide];
    modalImage.src = slide.src;
    modalImage.alt = slide.alt;
    modalCaption.textContent = slide.caption;
    modalCount.textContent = `${activeSlide + 1} / ${slides.length}`;
  };

  const renderProject = (project) => {
    activeProject = project;
    activeSlide = 0;

    modalType.textContent = project.type;
    modalTitle.textContent = project.title;
    modalSummary.textContent = project.summary;
    modalRole.textContent = project.role;
    modalFocus.textContent = project.focus;
    modalPlatform.textContent = project.platform;

    modalPoints.replaceChildren(
      ...project.points.map((point) => {
        const item = document.createElement("li");
        item.textContent = point;
        return item;
      })
    );

    modalTags.replaceChildren(
      ...project.tags.map((tag) => {
        const item = document.createElement("span");
        item.textContent = tag;
        return item;
      })
    );

    if (project.link) {
      modalLink.hidden = false;
      modalLink.href = project.link;
    } else {
      modalLink.hidden = true;
      modalLink.removeAttribute("href");
    }

    renderSlide();
  };

  const openProject = (projectKey) => {
    const project = projects[projectKey];
    if (!modal || !project) {
      return;
    }

    lastFocusedElement = document.activeElement;
    renderProject(project);
    modal.hidden = false;
    document.body.classList.add("modal-open");
    modal.querySelector(".modal-close").focus();

    if (window.lucide) {
      window.lucide.createIcons();
    }
  };

  const closeProject = () => {
    if (!modal) {
      return;
    }

    modal.hidden = true;
    document.body.classList.remove("modal-open");
    activeProject = null;

    if (lastFocusedElement) {
      lastFocusedElement.focus();
    }
  };

  document.querySelectorAll("[data-project]").forEach((trigger) => {
    trigger.addEventListener("click", () => openProject(trigger.dataset.project));
    trigger.addEventListener("keydown", (event) => {
      if (trigger.tagName === "BUTTON") {
        return;
      }

      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openProject(trigger.dataset.project);
      }
    });
  });

  previousButtons.forEach((button) => {
    button.addEventListener("click", () => {
      if (!activeProject) {
        return;
      }

      activeSlide = (activeSlide - 1 + activeProject.images.length) % activeProject.images.length;
      renderSlide();
    });
  });

  nextButtons.forEach((button) => {
    button.addEventListener("click", () => {
      if (!activeProject) {
        return;
      }

      activeSlide = (activeSlide + 1) % activeProject.images.length;
      renderSlide();
    });
  });

  document.querySelectorAll("[data-modal-close]").forEach((trigger) => {
    trigger.addEventListener("click", closeProject);
  });

  document.addEventListener("keydown", (event) => {
    if (!activeProject) {
      return;
    }

    if (event.key === "Escape") {
      closeProject();
    }

    if (event.key === "ArrowLeft") {
      activeSlide = (activeSlide - 1 + activeProject.images.length) % activeProject.images.length;
      renderSlide();
    }

    if (event.key === "ArrowRight") {
      activeSlide = (activeSlide + 1) % activeProject.images.length;
      renderSlide();
    }
  });
});
