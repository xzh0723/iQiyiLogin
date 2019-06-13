import execjs
import requests
import random

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
        return encryptPwd

    def login(self):
        """
        登录, 只有一个加密参数密码, 其他为定值
        :return:
        """
        url = 'https://passport.iqiyi.com/apis/reglogin/login.action'

        encrypyPwd = self.encryptPassword()

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
            'env_token': 'b4107b6deeb3496b93782ba5b65521f7',
            'dfp': 'a0d1bdbc96f62749cfa9e4c501412f4d7775a3d9138883090bdc7cf105f7c3dc7c',
            'envinfo': 'eyJqbiI6Ik1vemlsbGEvNS4wIChXaW5kb3dzIE5UIDEwLjA7IFdpbjY0OyB4NjQpIEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIENocm9tZS83NS4wLjM3NzAuODAgU2FmYXJpLzUzNy4zNiIsImNtIjoiemgtQ04iLCJndSI6MjQsInVmIjoxLCJqciI6WzEzNjYsNzY4XSwiZGkiOlsxMzY2LDcyOF0sInpwIjotNDgwLCJ1aCI6MSwic2giOjEsImhlIjoxLCJ6byI6MSwicnYiOiJ1bmtub3duIiwibngiOiJXaW4zMiIsIml3IjoidW5rbm93biIsInFtIjpbIkNocm9tZSBQREYgUGx1Z2luOjpQb3J0YWJsZSBEb2N1bWVudCBGb3JtYXQ6OmFwcGxpY2F0aW9uL3gtZ29vZ2xlLWNocm9tZS1wZGZ+cGRmIiwiQ2hyb21lIFBERiBWaWV3ZXI6Ojo6YXBwbGljYXRpb24vcGRmfnBkZiIsIk5hdGl2ZSBDbGllbnQ6Ojo6YXBwbGljYXRpb24veC1uYWNsfixhcHBsaWNhdGlvbi94LXBuYWNsfiJdLCJ3ciI6ImI3NzY2NGM3MTcwNzdhZmZmMzNhN2QyODM2ZTIzNzdjIiwid2ciOiJlZDI2NTg5MTM1MTJlNTA5MmZlMjE5NDAwOGQ3OWEwZSIsImZrIjpmYWxzZSwicmciOmZhbHNlLCJ4eSI6ZmFsc2UsImptIjpmYWxzZSwiYmEiOmZhbHNlLCJ0bSI6WzAsZmFsc2UsZmFsc2VdLCJhdSI6dHJ1ZSwibWkiOiJjYzhhZTUyYi1iZTIzLTVkMzktMjE1Ny0xYjRjY2M5MGRhZmEiLCJjbCI6IlBDV0VCIiwic3YiOiIxLjAiLCJqZyI6ImEzNjg1ZDcyZWMzY2ZlZTBlNWY3MDVkMTI5YmM5ZTkzIiwiZmgiOiJmb3ViYWg0Ynp4d2lhZTFtcDBla3YydiIsImlmbSI6W3RydWUsNDYwLDQyMCwiaHR0cDovL3d3dy5pcWl5aS5jb20vIl0sImV4IjoiIiwiZHYiOiJvZmYiLCJwdiI6ZmFsc2V9'
        }

        headers = {
            'Accept': 'application/json, text/javascript, */*; q=0.01',
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            'Origin': 'http://www.iqiyi.com',
            'Referer': 'http://www.iqiyi.com/iframe/loginreg?ver=1',
            'User-Agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.80 Mobile Safari/537.3'
        }

        r = requests.post(url, data=data, headers=headers)

        if r.json()['code'] == 'A00000':
            nickName = r.json()['data']['nickname']
            link = r.json()['data']['redirect']
            print(f'{nickName}登录成功')
            print(f'您的主页为>> {link}')
            # 存储cookies到本地
            cookies_ = requests.utils.dict_from_cookiejar(r.cookies)
            cookies = ''
            for key, value in cookies_.items():
                cookies += key + ': ' + value + '; '
            with open('cookies.txt', 'a') as f:
                f.write(cookies)
        else:
            print(r.json())

if __name__ == '__main__':
    userName = input('请输入您的账号>> ')
    passWord = input('请输入您的密码>> ')
    print('==========='*100)
    spider = iQiyiLogin(userName, passWord)
    spider.login()