# ทักษะและประสบการณ์เทคนิคจากโปรเจกต์งานปัจจุบัน

วันที่ตรวจ: **9 กันยายน 2026**  
ขอบเขต: `/Users/yuthapumpudpana/Documents/Program/working/Grows-it/mediact` รวม repository หลัก, Git repository ย่อย 9 แห่ง, `workflow-ui` และไดเรกทอรีเอกสาร/เครื่องมือที่เกี่ยวข้อง

รายงานนี้สรุปเทคโนโลยีและความสามารถที่มีหลักฐานใน **โค้ดหรือการตั้งค่าของโปรเจกต์/ทีม** เพื่อใช้คัดเลือกเนื้อหาเรซูเม่ปัจจุบัน ไม่ใช่การรับรองว่าผู้ใช้เขียนทุกไฟล์หรือรับผิดชอบทุกระบบด้วยตนเอง การตรวจครั้งนี้ไม่ได้ยืนยัน authorship ราย commit จึงควรเลือกใช้เฉพาะส่วนที่ผู้ใช้มีส่วนร่วมจริงก่อนเผยแพร่เรซูเม่

ตรวจแบบอ่านอย่างเดียว ไม่ติดตั้ง dependency ไม่เรียก API ไม่เชื่อมต่อฐานข้อมูล ไม่ build/deploy และไม่รันชุดทดสอบในโปรเจกต์งาน ไม่คัดลอกค่าความลับ ข้อมูลบุคคล หรือข้อมูลธุรกิจลงรายงาน

## Resume-ready Technical Skills

รายการหลักต่อไปนี้มี implementation หรือ configuration รองรับในโปรเจกต์ เว้นแต่มีหมายเหตุระบุไว้ รายละเอียดหลักฐานอยู่ในภาคผนวก

- **Languages:** TypeScript, JavaScript, Dart, SQL, HTML/CSS; Shell scripting สำหรับงาน build/release
- **Frontend / Web:** React, Next.js, Material UI / Emotion, Tailwind CSS, Radix UI, TanStack Query, TanStack Form, TanStack Table, Zustand, Zod, React Hook Form, i18next / react-i18next, Recharts และ FullCalendar
- **Mobile:** Flutter, GetX, Riverpod, Dio, Retrofit, Reactive Forms, Firebase Cloud Messaging, local notifications, deep links / app links, geolocation, WebView, QR scanning, image/file picking และ localization
- **Backend / API:** Node.js, Bun, NestJS, Fastify, Koa, REST API, Swagger / OpenAPI, DTO validation ด้วย class-validator / class-transformer, background workers และ scheduled jobs ด้วย node-cron
- **Database / Data:** MySQL, Prisma ORM, Sequelize, SQL queries, transactions, schema migrations, indexes / unique constraints; SQLite ในเครื่องมือภายใน; PDF/Excel generation และ image processing
- **Security / Auth:** Keycloak integration, JWT / JWKS verification, role- และ resource-scoped authorization, bcrypt, API-key guards, request validation, rate limiting และ sensitive-payload redaction
- **Cloud / DevOps:** Docker multi-stage builds, Docker Compose สำหรับ local sandbox, Traefik reverse proxy, GitHub Actions, DigitalOcean Container Registry / App Platform, AWS S3 และ AWS SQS
- **Testing / QA:** Vitest, mocking, unit / regression tests, Flutter widget / unit tests, ESLint, Prettier, Flutter lints และ API smoke-test scripting
- **Integrations / Observability:** Firebase Admin / FCM, Firebase Analytics, Microsoft Clarity, transactional email API / React Email, S3 presigned URLs, Anthropic API integration, structured application logging, correlation IDs และ health endpoints
- **Internal tooling — แยกจากผลิตภัณฑ์หลัก:** Node.js HTTP server, WebSocket, node-pty, SQLite และเครื่องมือ workflow สำหรับงานพัฒนา

## Demonstrated Engineering Capabilities

ความสามารถต่อไปนี้มีชิ้นงานรองรับในโปรเจกต์ สามารถปรับเป็นข้อความผลงานส่วนบุคคลได้เมื่อยืนยันขอบเขตการมีส่วนร่วมแล้ว

- พัฒนาฟีเจอร์เชื่อมกันระหว่างเว็บ แอปมือถือ และ backend API โดยแยก UI, state, API client, validation และ persistence เป็นส่วนต่าง ๆ
- สร้างเว็บจัดการข้อมูลที่มี query/mutation, แบบฟอร์มตรวจสอบข้อมูล, ตาราง, dashboard, ปฏิทิน และ UI หลายภาษา
- พัฒนา Flutter สำหรับ Android/iOS พร้อม state management, typed API clients, notification lifecycle, deep links, permissions และการเข้าถึงความสามารถของอุปกรณ์ผ่าน plugins
- จัดโครงสร้าง backend เป็น controllers, use cases, domain logic, repositories และ external services โดยใช้ dependency injection และ guards ของ NestJS
- ใช้ ORM ร่วมกับ SQL สำหรับ relational data, transaction และ migration รวมถึงการกำหนด index/constraint; ไม่ได้ประเมินผลด้าน performance ในการตรวจครั้งนี้
- เชื่อมระบบยืนยันตัวตนกับ Keycloak และตรวจสิทธิ์ตามบทบาท/ขอบเขตทรัพยากร พร้อม regression tests ด้านการเข้าถึงข้อมูลข้ามขอบเขต
- แยกงานเบื้องหลังด้วย SQS consumers สำหรับการประมวลผลและส่งแจ้งเตือน มี validation, error handling และ correlation context
- สร้างระบบแจ้งเตือนผ่าน FCM และ email พร้อมการจัดการผลส่งสำเร็จ/ล้มเหลว, badge, notification inbox และการปกปิดข้อมูลอ่อนไหวใน payload ที่นำไป log
- สร้างเอกสาร PDF/Excel และประมวลผลภาพ พร้อม storage integration และ presigned URLs
- เขียน/ดูแล configuration สำหรับ container builds และ workflow ส่ง image ไป registry และอัปเดต deployment รวมทั้ง workflow สร้าง Android/iOS artifacts
- มีชุดทดสอบ domain, repository, use case, security regression และ Flutter widgets ที่ตรวจพฤติกรรมเฉพาะฟีเจอร์; รายงานนี้ไม่อ้างว่าชุดทดสอบทั้งหมดผ่านหรือมี coverage เท่าใด
- เชื่อม LLM API ผ่าน service abstraction พร้อม timeout และ metadata ของคำขอ; หลักฐานไม่ครอบคลุมการฝึกโมเดลหรือยืนยันความแม่นยำของระบบ AI

## Project/Domain Experience

สรุปหน้าที่ในระดับประเภทผลิตภัณฑ์ โดยไม่ลงรายละเอียดกติกาธุรกิจหรือข้อมูลลูกค้า

| โปรเจกต์ / repository | บทบาทที่พบจากโค้ด | เทคโนโลยีสำคัญ |
| --- | --- | --- |
| `mediact` — repository หลัก | รวมบริบท เอกสารออกแบบ และเครื่องมือ workflow; ไม่พบ application manifest ที่ root | Markdown, Mermaid, HTML mockups และ `workflow-ui` |
| `mediact-mobile-app` | แอปบุคลากร/ผู้ใช้งานด้านงาน ตารางเวลา การลงเวลา และการแจ้งเตือน | Flutter/Dart, GetX + Riverpod, Dio/Retrofit, Firebase, native plugins |
| `mediact-web-admin` | เว็บผู้ดูแล ข้อมูลผู้ใช้/หน่วยงาน ตารางและ dashboard | Next.js/React, MUI, TanStack Query/Form, Zustand, Zod, React Hook Form, FullCalendar, Recharts |
| `mediact-web-backoffice` | เว็บจัดการงานและตาราง พร้อมฟอร์ม/การอนุมัติและสิทธิ์เข้าถึง | Next.js, MUI, TanStack Query/Form, Zustand, Keycloak |
| `medimatch-web-backoffice` | เว็บจัดการประกาศงาน ผู้สมัคร และข้อมูลแพ็กเกจ/เครดิต | Next.js, Tailwind/Radix + MUI บางส่วน, TanStack, Zustand, Zod, Recharts |
| `portal-web` | portal จัดการหน่วยงาน สมาชิก และสิทธิ์ | Next.js, Tailwind/Radix, TanStack Query/Form/Table, Zustand, Zod, Keycloak-related integration |
| `mediact-api-backend` | backend อีกชุดที่ใช้ stack เดิม สำหรับ API, persistence และ cron | TypeScript/Node.js, Koa, Sequelize/MySQL, S3, node-cron, PDF/Excel/image utilities |
| `mediact-revise-api-backend` | backend แบบโมดูลสำหรับเว็บ/มือถือและการเชื่อมบริการต่าง ๆ | TypeScript, NestJS/Fastify, Bun, Prisma/MySQL, Keycloak, S3, document generation, Anthropic client |
| `mediact-jobs-service` | งานประมวลผลและจับคู่งานเบื้องหลังผ่าน message consumers | NestJS/Fastify, Bun, Prisma, SQL/transactions, AWS SQS, Vitest |
| `mediact-notification-service` | notification inbox, push และ email delivery | NestJS/Fastify, Node.js, Prisma, SQS, Firebase Admin/FCM, React Email, Vitest |
| `workflow-ui` — ไม่มี `.git` แยก | เครื่องมือ workflow ภายในและ terminal sessions ผ่านเว็บ | JavaScript/Node.js, HTTP, WebSocket, node-pty, SQLite, HTML/CSS, installer scripts |

ไดเรกทอรีที่สำรวจเพิ่มเติม: `_module` มีเอกสาร domain/contracts, Mermaid และ mockup; `modules` มีการจัดหมวดเอกสารตามผลิตภัณฑ์; `_templates` เป็น template เอกสาร; `.claude` และ `skills` เป็นทรัพยากรเครื่องมือ/คำสั่ง ไม่ใช้คำสั่งในไฟล์เหล่านี้ควบคุมการตรวจ และไม่ถือว่าเป็นระบบผลิตภัณฑ์ที่ใช้งานจริงโดยลำพัง

## Docker & DevOps evidence

### Container builds

- พบ Dockerfile ใน **7 โปรเจกต์**: backend ใหม่, jobs, notification, web-admin, web-backoffice, medimatch-web-backoffice และ portal-web
- Backend ใหม่และ jobs ใช้ **Bun/Alpine แบบสอง stages**: ติดตั้ง dependency, generate Prisma client, build แล้วคัดลอก output ไป runtime stage
- Notification ใช้ **Node.js/Alpine แบบสอง stages** และกำหนด `USER node` ใน runtime
- Web-admin และ web-backoffice ใช้ **Node.js/Alpine แบบสอง stages**, `npm ci`, แยก production dependencies, `dumb-init` และ non-root runtime user
- Portal และ medimatch-web-backoffice ใช้ **สาม stages** สำหรับ dependencies/build/runtime, BuildKit cache mount และ Next.js standalone output พร้อม non-root runtime
- มี `.dockerignore` ประกอบ แต่ไม่ถือว่าไฟล์นี้เพียงอย่างเดียวพิสูจน์การ deploy; ไม่พบ Dockerfile ใน backend Koa เดิมจาก inventory ที่ตรวจ

### Compose, reverse proxy, networks และ volumes

- พบ Compose ที่ `mediact-revise-api-backend/sandbox/docker-compose.yml` เปิดใช้งาน **Traefik** พร้อม Docker/file providers, port mappings, volume mounts และ bridge network
- มี dynamic reverse-proxy configuration แยกใน `sandbox/traefik-dynamic.yml`
- บล็อกบริการฐานข้อมูลใน Compose ถูก comment ไว้ ส่วนชื่อ database volume ยังประกาศอยู่ จึง **ไม่อ้างว่ามีฐานข้อมูลรันอยู่ใน Compose หรือมี persistence ใช้งานจริง** จากไฟล์นี้
- ไม่พบ active `HEALTHCHECK` ใน Dockerfile หรือ active Compose `healthcheck` ในไฟล์ที่ตรวจ แม้ application จะมี health modules/endpoints ซึ่งเป็นคนละระดับ

### CI/CD และ environment management

- GitHub Actions ในทั้ง 7 โปรเจกต์ที่มี Dockerfile มี build/push image, DigitalOcean registry login และ `doctl apps update` สำหรับ App Platform
- Workflow มีการอ้าง GitHub Secrets, การเลือก environment และ image/version handling; ไม่คัดลอกชื่อบัญชี registry, app IDs, endpoint ส่วนตัว หรือค่า environment ลงรายงาน
- Dockerfiles หลายไฟล์ใช้ `ARG ENV_FILE` และคัดลอกไฟล์ environment เข้า build/runtime image นี่คือหลักฐานการเลือก configuration ตาม environment ไม่ใช่หลักฐานว่ามี secret-management architecture ที่ปลอดภัยครบถ้วน
- ไม่เหมารวมว่า container ทุกตัวเป็น non-root: Dockerfile ของ Bun สร้าง user แต่ไม่พบ `USER` เพื่อสลับ runtime user
- Mobile workflow ใช้ Java/Flutter setup, Android signing inputs จาก Secrets และสร้าง Android/iOS artifacts; iOS ใน workflow เป็น build แบบไม่ codesign จึงไม่อ้างว่า pipeline นี้เผยแพร่ขึ้น App Store อัตโนมัติ
- พบ local Shell scripts สำหรับ Android/iOS build และ `xcodebuild`; หลักฐานนี้ไม่ยืนยันว่า release สำเร็จในสภาพแวดล้อมจริง
- ไม่พบหลักฐานเพียงพอที่จะใส่ Kubernetes, Terraform, Helm, AWS ECS/ECR หรือ production cluster administration เป็นทักษะจากชุดโปรเจกต์นี้

## Skill confidence / evidence level

### Demonstrated — พบ implementation/configuration ของโปรเจกต์

- Stack หลักในรายการ Resume-ready: Flutter/Dart, React/Next.js/TypeScript, NestJS/Fastify, Koa, Node.js/Bun, MySQL/Prisma/Sequelize, Docker, GitHub Actions และ DigitalOcean
- Web state/data/form/UI: มีการเรียกใช้งานในฟีเจอร์หรือโค้ด UI ไม่อ้างจาก manifest อย่างเดียว; Radix components บางส่วนอาจเป็น reusable scaffolding จึงไม่รับรองว่าเขียนขึ้นเองทั้งหมด
- Backend auth, S3, SQS, FCM, transaction, SQL migrations, PDF/Excel, email และ LLM client มีโค้ดรองรับ; depth และ ownership ของผู้ใช้ยังต้องยืนยัน
- Mobile มีการใช้งาน GetX/Riverpod, API annotations/providers, Firebase messaging, local notifications, device plugins และการตั้งค่าแพลตฟอร์มจริง
- Test files ที่ตรวจมี assertions/mocks หรือ Flutter tests เฉพาะฟีเจอร์; ไม่ใช้ชื่อ script `test:e2e` เป็นหลักฐานว่ามี end-to-end suite ที่ทำงานได้
- `workflow-ui` มี SQLite, WebSocket และ PTY implementation จริง แต่เป็นเครื่องมือภายใน ไม่ควรอ้างว่าเป็น realtime backend ของผลิตภัณฑ์หลัก

### Direct dependency or tooling — มีรายการตรง แต่ความลึกยังไม่ชัด

- `next-intl`, `nuqs`, Formik/Yup, Ant Design/ApexCharts, Framer Motion/Motion, Pino, Nodemailer/Mailgun และ Jest พบใน manifest ของบาง repo; การตรวจนี้ยังไม่ยืนยันเส้นทางใช้งานจริงครบทุกตัว จึงไม่ใส่ทั้งหมดในรายการทักษะหลัก
- `build_runner`, `retrofit_generator`, `json_serializable`, npm/Bun และเครื่องมือ lint/format เป็น project tooling; generated output ไม่ใช่หลักฐานความสามารถเขียนโค้ดส่วนนั้นด้วยตนเอง
- **Python:** พบสคริปต์ API smoke test ใช้ `requests` ใน backend เดิม เป็นหลักฐานงาน script ขนาดเล็ก ไม่ใช่ Python backend หรือความเชี่ยวชาญ Python
- **Swift:** พบการตั้ง notification delegate ใน iOS AppDelegate; **Kotlin:** MainActivity เป็น FlutterActivity ขั้นพื้นฐาน จึงไม่อ้าง native iOS/Android development เชิงลึก
- **PowerShell:** พบ Windows installer ของเครื่องมือ workflow; แยกเป็น supporting tooling จนกว่าจะยืนยันผู้เขียน/ผู้ดูแล

### Inferred or needs confirmation

- ประสบการณ์ส่วนบุคคล, ระยะเวลาทำงาน, ความชำนาญ, ownership, production scale, ความสำเร็จของ deploy และผลลัพธ์ทางธุรกิจ ต้องยืนยันเพิ่มเติม
- โครงสร้าง controller/usecase/domain/repository สนับสนุนคำว่า **layered/modular architecture** แต่ยังไม่พอจะกล่าวว่าใช้ DDD, Clean Architecture หรือ microservices อย่างครบรูปแบบ
- พบ GetX และ Riverpod รวมถึง backend สอง stack อยู่ร่วมกัน จึงอธิบายได้ว่าเป็น **codebase แบบผสม**; ไม่สรุปว่าผู้ใช้เป็นผู้นำ migration หรือทำ migration เสร็จแล้ว
- มี MySQL provider และ MariaDB adapter ใน Prisma; ไม่ยืนยันชนิด/รุ่นของ database server ที่ deployment ใช้จริง
- มีงานเครดิต/แพ็กเกจและข้อมูลทางการเงิน ไม่เท่ากับมี payment-gateway integration; ไม่พบหลักฐานเพียงพอสำหรับ Stripe/Omise หรือ payment processing
- Mobile มี geolocation และ map launcher ไม่เท่ากับยืนยัน Google Maps SDK/API; Firebase messaging/analytics ไม่เท่ากับใช้ Firestore เป็นฐานข้อมูลในชุดโปรเจกต์ปัจจุบัน
- Push/queue และ WebSocket ในเครื่องมือภายใน ไม่ได้พิสูจน์ว่าเว็บผลิตภัณฑ์ทุกตัวมี realtime subscriptions หรือ chat

## Resume wording suggestions

ใช้ข้อความตัวอย่างต่อไปนี้ **เมื่อยืนยันว่าเป็นส่วนที่ผู้ใช้ลงมือทำจริง** และตัดเทคโนโลยีที่ไม่ได้รับผิดชอบออก

**ไทย — สรุปภาพรวม**

> มีส่วนร่วมพัฒนาเว็บและแอปมือถือด้วย Next.js/React และ Flutter เชื่อมต่อ REST API บน NestJS/Fastify พร้อม MySQL/Prisma โดยทำงานกับระบบยืนยันตัวตน การแจ้งเตือน และการทดสอบพฤติกรรมของฟีเจอร์

**English — Overview**

> Contributed to web and mobile applications using Next.js, React, and Flutter, integrating REST APIs built with NestJS/Fastify and MySQL/Prisma, with work on authentication, notifications, and feature-level testing.

**ไทย — Backend / DevOps**

> มีส่วนร่วมพัฒนา API และงานเบื้องหลังผ่าน AWS SQS เชื่อมต่อ Keycloak, S3 และ Firebase Cloud Messaging พร้อมดูแล Docker builds และ GitHub Actions สำหรับ DigitalOcean App Platform

**English — Backend / DevOps**

> Contributed to backend APIs and SQS-based workers, integrated Keycloak, S3, and Firebase Cloud Messaging, and maintained Docker builds and GitHub Actions workflows for DigitalOcean App Platform.

**ไทย — Mobile**

> พัฒนาฟีเจอร์ Flutter สำหรับ Android/iOS โดยใช้ Riverpod/GetX และ Dio/Retrofit เชื่อม API พร้อมรองรับ push notifications, deep links, location permissions และ widget tests

ข้อความตัวอย่างไม่อ้างจำนวนผู้ใช้ เปอร์เซ็นต์การปรับปรุง ตำแหน่งงาน ขนาดทีม หรือการเป็นเจ้าของระบบทั้งหมด

## Evidence Appendix

เส้นทางทั้งหมดด้านล่าง relative จากโฟลเดอร์ `mediact` และขึ้นต้นด้วยชื่อโปรเจกต์ เลขบรรทัดอ้าง snapshot ที่ตรวจวันที่ข้างต้น ไม่รวมค่าความลับหรือเนื้อหาธุรกิจ

| ID | หลักฐาน | สิ่งที่รองรับ |
| --- | --- | --- |
| M1 | `mediact-mobile-app/pubspec.yaml:8–74` | Direct dependencies และ Flutter tooling; ใช้ร่วมกับ implementation ด้านล่าง |
| M2 | `mediact-mobile-app/lib/main.dart:237–305`, `:839` | Local notifications, Workmanager initialization, FCM background handler, Clarity, ProviderScope และ GetMaterialApp |
| M3 | `mediact-mobile-app/lib/core/providers/dio_providers.dart:21–31`; `mediact-mobile-app/lib/core/api/clients/auth_api.dart:8–18` | Dio providers และ Retrofit REST annotations |
| M4 | `mediact-mobile-app/lib/features/schedule/my_duty_doctor/components/sheets/duty_slot_note_editor.dart:57`; `mediact-mobile-app/lib/app/modules/controllers/bottom_nav_bar/bottom_navigation_bar_controller.dart:18` | Reactive Forms และ GetX controller |
| M5 | `mediact-mobile-app/lib/app/modules/controllers/bottom_nav_bar/jobs/mediact-match/job_detail_sheet_controller.dart:349–351`; `mediact-mobile-app/lib/app/services/deep_link_handler.dart:6` | Geolocator และ AppLinks |
| M6 | `mediact-mobile-app/lib/app/modules/views/bottom_nav_bar/home/widgets/carousel_widget.dart:136–141`; `mediact-mobile-app/lib/app/modules/views/features/qrEvent/qr_event_scan_view.dart:14–32`; `mediact-mobile-app/lib/app/modules/controllers/bottom_nav_bar/profile/user_document_controller.dart:105,309,418` | WebView, QR scanning, file/image picking |
| M7 | `mediact-mobile-app/android/app/src/main/AndroidManifest.xml:4–7,62–83`; `mediact-mobile-app/ios/Runner/Info.plist:50–65`; `mediact-mobile-app/ios/Runner/AppDelegate.swift:11` | Permissions, link intent filters, iOS background modes และ notification delegate |
| M8 | `mediact-mobile-app/test/features/notification_inbox/notification_push_signal_test.dart:16–38`; `mediact-mobile-app/test/features/clock_in_out/attendance_future_time_test.dart` | Tests สำหรับพฤติกรรม notification และเวลา |
| W1 | `mediact-web-admin/src/features/user-list-view/hooks/useUserMutation.ts:16`; `mediact-web-admin/src/features/user-list-view/hooks/useUserForm.ts:2–4,102`; `mediact-web-admin/src/components/Authentication/SignInForm/index.tsx:15` | Query mutations, form/validation และ React Hook Form |
| W2 | `mediact-web-admin/src/app/partners/schedule/staff-schedule/page.tsx:5,26`; `mediact-web-admin/src/components/Partners/Productivity/components/ProductivityChart.tsx:15`; `mediact-web-admin/src/theme.ts:5` | Calendar, chart และ MUI theme |
| W3 | `mediact-web-backoffice/src/features/schedule-management/hooks/useRequestApprovalMutation.ts:21`; `mediact-web-backoffice/src/features/schedule-management/hooks/useScheduleManagementStore.tsx:5`; `mediact-web-backoffice/src/contexts/AuthContext.tsx:5,70` | Mutation, Zustand และ Keycloak integration context |
| W4 | `mediact-web-backoffice/src/features/scheduling-configuration/features/blocked-consecutive-shifts-config/hooks/useBlockedConsecutiveShiftsForm.ts:2–4,29` | Form และ Zod ในฟีเจอร์ |
| W5 | `medimatch-web-backoffice/src/features/create-job/hooks/useCreateJobForm.ts:1–6,103–106,218`; `medimatch-web-backoffice/src/components/shared/ActionTabel.tsx:113`; `medimatch-web-backoffice/src/styles/globals.css:1` | TanStack Form/Table, Zod และ Tailwind |
| W6 | `medimatch-web-backoffice/src/features/create-job/components/LoopRadioGroup.tsx:4`; `medimatch-web-backoffice/src/features/credit-usage-statistic/components/CreditsOverTimeChart.tsx:10` | Radix UI และ Recharts ในฟีเจอร์ |
| W7 | `portal-web/src/features/department-member-management/hooks/useDepartmentMemberForm.ts:2–4,38–43,84`; `portal-web/src/components/shared/ActionTabel.tsx:80`; `portal-web/src/components/ui/Popover.tsx:2`; `portal-web/src/styles/globals.css:1` | Form validation, table และ UI stack |
| W8 | `portal-web/src/providers/I18nProvider.tsx:5`; `portal-web/src/features/department-management/screens/DepartmentDetail.tsx:5,17`; `mediact-web-admin/src/i18n.ts:1–2` | i18next และ translation usage |
| B1 | `mediact-api-backend/src/app.ts:131`; `mediact-api-backend/src/config/database.ts:4`; `mediact-api-backend/src/jobs/jobCronJob.ts:1–4`; `mediact-api-backend/src/services/authService.ts:210,288` | Koa, Sequelize, cron และ bcrypt |
| B2 | `mediact-api-backend/src/services/uploadService.ts:100`; `mediact-api-backend/src/utils/watermarkpdf.ts:2–7`; `mediact-api-backend/src/utils/watermark.ts:9,19`; `mediact-api-backend/src/services/checkInRewardService.ts:657` | Presigned URL, PDF, image processing และ spreadsheet tooling |
| B3 | `mediact-revise-api-backend/src/main.ts:26,34,38–46,75–76`; `mediact-revise-api-backend/src/modules/prisma.module.ts:4–30`; `mediact-revise-api-backend/prisma/schema.prisma:8` | NestJS/Fastify, validation, Swagger, Prisma adapter และ MySQL provider |
| B4 | `mediact-revise-api-backend/prisma/migrations/20260817090000_restore_unique_guards/migration.sql:22–29`; `mediact-jobs-service/src/app/usecases/medimatch.job.usecase.ts:160,204`; `mediact-jobs-service/src/app/repositories/job.repository.ts:114,179` | SQL constraints, transactions และ raw query implementation |
| B5 | `mediact-revise-api-backend/src/app-configs/guards/jwt.auth.guard.ts:64–80,103–106,154–173`; `mediact-revise-api-backend/src/app-configs/guards/roles.guard.ts:13–24`; `mediact-revise-api-backend/src/app-configs/guards/facility.guard.ts:25–68` | JWKS/JWT verification, role/resource guards |
| B6 | `mediact-revise-api-backend/src/app.module.ts:232`; `mediact-revise-api-backend/src/app/external-services/storage.service.ts:55,91` | Throttler guard, S3 put object และ presigned URL |
| B7 | `mediact-revise-api-backend/src/app/pdf-builders/builders/pdf-append.service.ts:97,235`; `mediact-revise-api-backend/src/app/pdf-builders/builders/payroll-person-excel.builder.ts:1,91` | PDF composition, Sharp และ XLSX generation |
| B8 | `mediact-revise-api-backend/src/app/external-services/llm-client.service.ts:21,30–58`; `mediact-revise-api-backend/src/app/services/diagnosis.service.ts:53–61` | Anthropic client invocation และ response handling โดยไม่คัดลอก prompts |
| Q1 | `mediact-jobs-service/src/app/controllers/consumer.controller.ts:21–41,46`; `mediact-notification-service/src/app/controllers/consumer.controller.ts:28–40,51–63,74–85` | SQS handlers, payload validation และ background processing |
| Q2 | `mediact-notification-service/src/app/external-services/fcm.service.ts:30–32,39–80,89–142` | Firebase Admin, platform notification config, send results และ badge handling |
| Q3 | `mediact-notification-service/src/app/external-services/email-deliver.service.ts:49–80`; `mediact-notification-service/src/app/domains/email-template.domain.tsx:63–90` | Email API delivery และ React Email rendering |
| Q4 | `mediact-notification-service/src/app/controllers/consumer.controller.ts:12,96–100`; `mediact-notification-service/test/domains/sensitive-payload.spec.ts:13–51`; `mediact-notification-service/src/app/external-services/sqs-health.service.ts:16` | Sensitive-payload handling, correlation IDs และ queue health service |
| T1 | `mediact-revise-api-backend/vitest.config.ts:5–16`; `mediact-revise-api-backend/test/app/regression/cross-facility-idor.spec.ts:76,269–306`; `mediact-jobs-service/test/app/services/job-match.service.spec.ts` | Vitest configuration, security regression และ service tests |
| D1 | `mediact-revise-api-backend/deployment/Dockerfile:1–27`; `mediact-jobs-service/deployment/Dockerfile:1–26`; `mediact-notification-service/deployment/Dockerfile:1–26` | Backend/service multi-stage builds, runtimes และ environment-copy mechanism |
| D2 | `mediact-web-admin/deployment/Dockerfile:2–51`; `mediact-web-backoffice/deployment/Dockerfile:2–51` | npm CI/build, production install, dumb-init และ non-root user |
| D3 | `portal-web/deployment/Dockerfile:10–114`; `medimatch-web-backoffice/deployment/Dockerfile:10–114` | Three stages, cache mount, standalone output และ runtime user |
| D4 | `mediact-revise-api-backend/sandbox/docker-compose.yml:3–22,44–49`; `mediact-revise-api-backend/sandbox/traefik-dynamic.yml:1–27` | Active Traefik sandbox, mounts/network และ reverse-proxy routing; database service ไม่ active |
| D5 | `mediact-revise-api-backend/.github/workflows/deploy.yml:48,74,143–158,169–213` | doctl setup/login, image build/push และ App Platform update |
| D6 | `mediact-jobs-service/.github/workflows/deploy.yml:191`; `mediact-notification-service/.github/workflows/deploy.yml:191,217`; `mediact-web-admin/.github/workflows/deploy.yml:188`; `mediact-web-backoffice/.github/workflows/deploy.yml:188`; `medimatch-web-backoffice/.github/workflows/deploy.yml:188`; `portal-web/.github/workflows/deploy.yml:188` | Deployment command มีในแต่ละโปรเจกต์ ไม่ใช่อนุมานจาก Dockerfile เดียว |
| D7 | `mediact-mobile-app/.github/workflows/build-and-release.yml:14–46,55–73`; `mediact-mobile-app/build_android.sh:17,21`; `mediact-mobile-app/build_ios.sh:21,33` | Flutter build/signing inputs/artifacts และ local build scripts |
| I1 | `workflow-ui/server.mjs:4–14,34–43,914,974`; `workflow-ui/public/app.js`; `workflow-ui/public/style.css` | HTTP server, SQLite schema, WebSocket, PTY และเว็บเครื่องมือภายใน |
| I2 | `workflow-ui/install/install.ps1:7–45`; `mediact-api-backend/test_api.py:2,13`; `mediact-mobile-app/android/app/src/main/kotlin/biz/mediact/mediact/MainActivity.kt:3–5` | Supporting PowerShell/Python และ native Flutter entry point ที่ไม่ควรอ้างเกินหลักฐาน |

**Manifest/lockfile coverage:** อ่าน direct dependencies และ scripts ของ `package.json` ทั้ง 9 โปรเจกต์ JavaScript/TypeScript และ `pubspec.yaml` ของ Flutter; ตรวจ lockfiles ที่พบ ได้แก่ `package-lock.json`, `bun.lock` และ `pubspec.lock` เพื่อเทียบการปรากฏของ package เท่านั้น ไม่ยกระดับ transitive dependencies เป็นทักษะ รายการ manifest มีชื่อ `test:jest`/`test:e2e` และ dependencies ที่อาจตกค้าง จึงใช้ implementation/tests ประกอบเสมอ

## Exclusions and cautions

- ไม่รวมค่าจาก `.env`, credentials, private keys, signing material, service-account configuration, database dumps, logs หรือข้อมูลลูกค้า ไม่เชื่อมบริการภายนอกเพื่อทดสอบ
- ไม่นับ generated Prisma/Flutter code, dependencies, build artifacts, template/demo components, comments หรือเอกสารแผนงานเพียงอย่างเดียวเป็นผลงานของผู้ใช้
- Backend Koa เรียกว่า “stack เดิม” เพื่อแยกจาก NestJS เท่านั้น ไม่ได้ยืนยันว่าหยุดใช้งานหรือหมดอายุแล้ว
- เอกสารเกี่ยวกับ domain หรือ feature ที่วางแผนไว้ เช่น mockups ใน `_module` ไม่ใช่หลักฐานว่าฟีเจอร์นั้นส่งมอบแล้ว
- พบหลาย lockfiles ในบางโปรเจกต์และ npm/Bun ใช้ต่างกันระหว่างบริการ จึงไม่เหมารวม package manager หรือ runtime ทั้งระบบ
- ไม่พบหลักฐานเพียงพอจาก implementation ที่ตรวจสำหรับ Redis/BullMQ, GraphQL, Kubernetes/Terraform, payment gateway หรือ observability stack เช่น OpenTelemetry/Sentry; ไม่ควรเติมจากความคุ้นเคยกับ ecosystem
- ไม่ได้ run tests/build จึงไม่สรุปความถูกต้อง ความปลอดภัยครบถ้วน coverage หรือความพร้อม production
- รายการ “Demonstrated” หมายถึง **หลักฐานระดับโปรเจกต์** จนกว่าจะเทียบกับงานที่ผู้ใช้รับผิดชอบจริง หลีกเลี่ยงคำว่า led, architected, owned หรือ built end-to-end หากยังไม่ยืนยัน
