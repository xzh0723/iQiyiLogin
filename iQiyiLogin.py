import execjs
import requests
import random
import time
import json

class iQiyiLogin():
    def __init__(self, userName, passWord):
        self.userName = userName
        self.passWord = passWord

    def encryptPassword(self):
        """
        加密密码
        :return:
        """
        with open('iqiyiPwdEncrypt.js', 'r') as f:
            js = f.read()

        ctx = execjs.compile(js)
        encryptPwd = ctx.call('rsaFun', self.passWord)
        print(f'密码加密参数>> {encryptPwd}')
        print('===========' * 100)
        return encryptPwd

    def getAreaCode(self):
        """
        获取地区编码
        :return:
        """
        url = 'https://passport.iqiyi.com/apis/phone/get_support_areacode.action'
        data = {
            'use_case': '1',
            'local': '1',
            'agenttype': '1',
            'fromSDK': '1',
            'ptid': '01010021010000000000',
            'sdk_version': '1.0.0'
        }
        r = requests.post(url, data=data).json()
        codeDict = r['data']['acode']
        return codeDict

    def login(self, encrypyPwd):
        """
        登录
        :return:
        """
        url = 'https://passport.iqiyi.com/apis/reglogin/login.action'

        data = {
            'email': self.userName,
            'fromSDK': '1',
            'sdk_version': '1.0.0',
            'passwd': encrypyPwd,
            'agenttype': '1',
            '__NEW': '1',
            'checkExist': '1',
            'lang': '',
            'ptid': '01010021010000000000',
            'nr': '1',
            'verifyPhone': '1',
            'area_code': '86',
            'env_token': 'c225a3e03fdf4c90a9227af2f0abd8bb',
            'dfp': 'a06e54c2dfe5d24ebf8aec1c2d0a8f5afb2fc70fd2a147f7ab9e5aea7cff440f9e',
            'envinfo': 'eyJqbiI6Ik1vemlsbGEvNS4wIChXaW5kb3dzIE5UIDEwLjA7IFdPVzY0OyBydjo2Ny4wKSBHZWNrby8yMDEwMDEwMSBGaXJlZm94LzY3LjAiLCJjbSI6InpoLUNOIiwiZ3UiOjI0LCJ1ZiI6MSwianIiOlsxMzY2LDc2OF0sImRpIjpbMTM2Niw3MjhdLCJ6cCI6LTQ4MCwidWgiOjEsInNoIjoxLCJoZSI6MSwicnYiOiJ1bmtub3duIiwibngiOiJXaW4zMiIsIml3IjoidW5zcGVjaWZpZWQiLCJxbSI6W10sIndyIjoiOWUzYjk5MzFhNzBiMGQwZDI0NGU1ZTg1MTAyZGJiYTAiLCJ3ZyI6IjRlMzVhYWVjZTM2NTU0YTM5MGQwYWU1MDNlZDljOTM0IiwiZmsiOmZhbHNlLCJyZyI6ZmFsc2UsInh5IjpmYWxzZSwiam0iOmZhbHNlLCJiYSI6ZmFsc2UsInRtIjpbMCxmYWxzZSxmYWxzZV0sImF1Ijp0cnVlLCJtaSI6IjQ1MjY1MDUxLWM3MjItNTcyOC00OGY3LWJiMjA3N2NlMGVhMCIsImNsIjoiUENXRUIiLCJzdiI6IjEuMCIsImpnIjoiNTE3YzNiNDk0NzFlMTJiZTc0N2QzYWI3MWY1YTM1OTMiLCJmaCI6ImhydWtvdjY0OW15OGV1YnB4Ym9uMThuayIsImlmbSI6W3RydWUsNDYwLDQyMCwiaHR0cDovL3d3dy5pcWl5aS5jb20vIl0sImV4IjoiIiwicHYiOmZhbHNlfQ=='
        }

        headers = {
            'Accept': 'application/json, text/javascript, */*; q=0.01',
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            'Origin': 'http://www.iqiyi.com',
            'Referer': 'http://www.iqiyi.com/iframe/loginreg?ver=1',
            # 'Cookie': 'QC005=517c3b49471e12be747d3ab71f5a3593; QC173=0; QC175=%7B%22upd%22%3Atrue%2C%22ct%22%3A%22%22%7D; QC176=%7B%22state%22%3A0%2C%22ct%22%3A1560493270349%7D; QC006=hrukov649my8eubpxbon18nk; QC008=1560493275.1560524793.1560526194.3; QC001=1; Hm_lvt_53b7374a63c37483e5dd97d78d9bb36e=1560493276,1560524791,1560526193; T00404=9f51f9475ecce43dcab2f7671441adbb; IMS=IggQABj_iI_oBSokCiAwNWY1NGNmZjE5NTkxNjVlZjQ4NDgzMDBiMDFlYzIyNRAA; P00004=.1560493279.b2901e3310; QC160=%7B%22u%22%3A%2218829040039%22%2C%22lang%22%3A%22%22%2C%22local%22%3A%7B%22name%22%3A%22%E4%B8%AD%E5%9B%BD%E5%A4%A7%E9%99%86%22%2C%22init%22%3A%22Z%22%2C%22rcode%22%3A48%2C%22acode%22%3A%2286%22%7D%2C%22type%22%3A%22p1%22%7D; Hm_lpvt_53b7374a63c37483e5dd97d78d9bb36e=1560526193; QC007=http%253A%252F%252Fwww.so.com%252Flink%253Fm%253Da7qrUu9w4zbwjTqX%25252BasX5Z7vy%25252FxHyVEAlhQdUe9nmiXNZ9KvZC8iPeMmxooWin7pPzIEG3hBHops5br0qbXdAFMbb09t9b111jRLvQzTz2xQ%25253D; QC010=119642892; nu=0; __dfp=a06e54c2dfe5d24ebf8aec1c2d0a8f5afb2fc70fd2a147f7ab9e5aea7cff440f9e@1561789277099@1560493277099',
            'User-Agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.80 Mobile Safari/537.3'
        }

        r = requests.post(url, data=data, headers=headers)

        while True:
            result = json.loads(r.text)
            if result['code'] == 'A00000':
                nickName = r.json()['data']['nickname']
                print(f'{nickName}>> 登录成功!')
                print('===========' * 100)

                # 存储cookies到本地, 并获取登录认证cookie获取用户基本信息
                cookies_ = requests.utils.dict_from_cookiejar(r.cookies)
                print(f'cookies: {cookies_}')
                authCookie = cookies_['P00001']
                deviceId = cookies_['QC005']
                cookies = ''
                for key, value in cookies_.items():
                    cookies += key + ': ' + value + '; '
                with open('cookies.txt', 'a') as f:
                    f.write(cookies)
                return authCookie
            else:
                print(r.text)
                token = result['data']['data']['token']
                data.update({'env_token': token})
                print(f'env_token更新为: {token}')
                r = requests.post(url, data=data, headers=headers)

    def getUserInfo(self, authCookie, codeDict):
        """
        获取用户信息
        :return:
        """
        url = 'https://passport.iqiyi.com/apis/user/info.action'
        with open('antiCsrf.js', 'r') as f:
            js = f.read()
        ctx = execjs.compile(js)
        antiCsrf = ctx.call('getAnticsrf', authCookie)
        print(f'antiCsrf: {antiCsrf}')
        print('===========' * 100)
        data = {
            'agenttype': '1',
            'ptid': '01010021010000000000',
            'lang': '',
            'fromSDK': '1',
            'sdk_version': '1.0.0',
            'authcookie': authCookie,
            'antiCsrf': antiCsrf,
            'fields': 'insecure_account,userinfo'
        }
        r = requests.post(url, data=data)
        userInfo = r.json()['data']['userinfo']
        jointime = time.strftime("%Y-%m-%d %H:%M:%S", time.localtime(int(userInfo['jointime'])))
        if userInfo['gender'] == 1:
            gender = '男'
        else:
            gender = '女'
        areaCode = userInfo['area_code']
        for code in codeDict.keys():
            if areaCode == code:
                area = codeDict[code]
                if userInfo['birthday']:
                    birthday = time.strftime("%Y-%m-%d %H:%M:%S", time.localtime(int(userInfo['birthday'])))
                    userInfo.update({'birthday': birthday, 'jointime': jointime, 'gender': gender, 'area': area})
        # 移除地区代码
        del userInfo['area_code']
        print(f'您的基本信息为: {userInfo}')

    def run(self):
        """
        主函数
        :return:
        """
        encrypyPwd = self.encryptPassword()
        codeDict = self.getAreaCode()
        authCookie = self.login(encrypyPwd)
        self.getUserInfo(authCookie, codeDict)

if __name__ == '__main__':
    userName = input('请输入您的账号>> ')
    passWord = input('请输入您的密码>> ')
    print('==========='*100)
    spider = iQiyiLogin(userName, passWord)
    spider.run()
