# Jongno-Heat-Response-Platform
A  platform for visualizing and responding to heatwave risks in Jongno.


## 🚀 실행 방법
### 1. 프로젝트 클론
```bash
git clone https://github.com/igoobo/Jongno-Heat-Response-Platform.git
cd Jongno-Heat-Response-Platform
```
### 2. 가상환경 설정 및 패키지 설치
```bash
python -m venv venv
source venv/bin/activate     # 윈도우: venv\\Scripts\\activate
pip install -r requirements.txt
```
### 3. 데이터베이스 마이그레이션 (생략 08.01)
``` bash
python manage.py migrate
```
### 4. 로컬 서버 실행
```bash
python manage.py runserver
```
기본 URL: http://127.0.0.1:8000
