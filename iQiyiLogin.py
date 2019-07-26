# -*- coding: utf-8 -*-
# @Time    : 2019/7/26 22:54
# @Author  : xuzhihai0723
# @Email   : 18829040039@163.com
# @File    : iQiyiLogin.py
# @Software: PyCharm

import execjs
import requests
import time
import json


class IQiyiLogin:

    def __init__(self, username='18829040039', password='xuzhihai0723'):
        self.userName = username
        self.passWord = password

    def encryptPassword(self):
        """
        加密密码
        :return:
        """
        with open('iqiyiPwdEncrypt.js', 'r') as f:
            js = f.read()

        ctx = execjs.compile(js)
        encryptPwd = ctx.call('rsaFun', self.passWord)
        # print(f'密码加密参数>> {encryptPwd}')
        # print('===========' * 100)
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
        code_dict = r['data']['acode']
        return code_dict

    def login(self, encrypt_pwd):
        """
        登录, 只有一个加密参数密码, 其他为定值
        :return:
        """
        url = 'https://passport.iqiyi.com/apis/reglogin/login.action'

        data = {
            'email': self.userName,
            'fromSDK': '1',
            'sdk_version': '1.0.0',
            'passwd': encrypt_pwd,
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
            'User-Agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.80 Mobile Safari/537.3'
        }

        r = requests.post(url, data=data, headers=headers)

        while True:
            result = json.loads(r.text)
            if result['code'] == 'A00000':
                nickname = r.json()['data']['nickname']
                print(f'{nickname}>> 登录成功!')
                print('===========' * 100)

                # 存储cookies到本地, 并获取登录认证cookie获取用户基本信息
                cookies_ = requests.utils.dict_from_cookiejar(r.cookies)
                # print(f'cookies: {cookies_}')
                auth_cookie = cookies_['P00001']
                # device_id = cookies_['QC005']
                cookies = ''
                for key, value in cookies_.items():
                    cookies += key + ': ' + value + '; '
                with open('cookies.txt', 'a') as f:
                    f.write(cookies)
                return auth_cookie
            else:
                # print(r.text)
                token = result['data']['data']['token']
                data.update({'env_token': token})
                print(f'env_token更新为: {token}')
                r = requests.post(url, data=data, headers=headers)

    def get_userinfo(self, auth_cookie, code_dict):
        """
        获取用户信息
        :return:
        """
        url = 'https://passport.iqiyi.com/apis/user/info.action'
        with open('antiCsrf.js', 'rb') as f:
            js = f.read().decode()
        ctx = execjs.compile(js)
        anticsrf = ctx.call('getAnticsrf', auth_cookie)
        # print(f'antiCsrf: {antiCsrf}')
        print('===========' * 100)
        data = {
            'agenttype': '1',
            'ptid': '01010021010000000000',
            'lang': '',
            'fromSDK': '1',
            'sdk_version': '1.0.0',
            'authcookie': auth_cookie,
            'antiCsrf': anticsrf,
            'fields': 'insecure_account,userinfo'
        }
        r = requests.post(url, data=data)
        user_info = r.json()['data']['userinfo']
        jointime = time.strftime("%Y-%m-%d %H:%M:%S", time.localtime(int(user_info['jointime'])))
        if user_info['gender'] == 1:
            gender = '男'
        else:
            gender = '女'
        area_code = user_info['area_code']
        for code in code_dict.keys():
            if area_code == code:
                area = code_dict[code]
                if user_info['birthday']:
                    birthday = time.strftime("%Y-%m-%d %H:%M:%S", time.localtime(int(user_info['birthday'])))
                    user_info.update({'birthday': birthday, 'jointime': jointime, 'gender': gender, 'area': area})
        # 移除地区代码
        del user_info['area_code']
        print(f'您的基本信息为: {user_info}')

    def run(self):
        """
        主函数
        :return:
        """
        encrypt_pwd = self.encryptPassword()
        code_dict = self.getAreaCode()
        auth_cookie = self.login(encrypt_pwd)
        self.get_userinfo(auth_cookie, code_dict)


if __name__ == '__main__':
    userName = input('请输入您的账号>> ')
    passWord = input('请输入您的密码>> ')
    print('==========='*100)
    IQiyiLogin(userName, passWord).run()
