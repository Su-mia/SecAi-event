import kaggle
from kaggle.api.kaggle_api_extended import KaggleApi
import json
import datetime

import gspread
from google.oauth2.service_account import Credentials

class LeaderBoard:
    def __init__(self):
        with open('competition.config.json') as config_file:
            config = json.load(config_file)
        self.competition_name = config.get('competition_name')
        self.sheet_id = config.get('members_sheet_id')
        self.api = KaggleApi()
        self.api.authenticate()

    def get_kaggle_leaderboard(self):
        leaderboard = kaggle.api.competition_leaderboard_view(self.competition_name)
        my_data = []
        members = self.get_competition_members()

        for row in leaderboard:
            my_row = vars(row)
            if my_row['teamName'] in members:
                extended_row = my_row.copy()

                if isinstance(extended_row['submissionDate'], datetime.datetime):
                    time_elapsed = datetime.datetime.now() - extended_row['submissionDate']
                    extended_row['submissionDate'] = extended_row['submissionDate'].strftime('%Y-%m-%d %H:%M:%S')

                extended_row['teamMembers'] = members[extended_row['teamName']]
                days = time_elapsed.days
                seconds = time_elapsed.seconds
                hours = seconds // 3600
                minutes = (seconds % 3600) // 60
                seconds = seconds % 60
                if days != 0:
                    extended_row['last'] = f"{days}d {hours}h {minutes}m {seconds}s"
                elif hours != 0:
                    extended_row['last'] = f"{hours}h {minutes}m {seconds}s"
                else:
                    extended_row['last'] = f"{minutes}m {seconds}s"
                my_data.append(extended_row)

        return my_data

    def get_competition_members(self):
        scopes = ['https://www.googleapis.com/auth/spreadsheets']
        creds = Credentials.from_service_account_file("sheet.config.json", scopes=scopes)
        client = gspread.authorize(creds)

        sheet = client.open_by_key(self.sheet_id).sheet1

        teams = {}
        for fn, ln, email, tn in sheet.get_all_values()[1:]:
            if tn not in teams:
                teams[tn] = []
                team_member = {
                    'first_name': fn,
                    'last_name': ln,
                    'email': email,
                }
                teams[tn].append(team_member)
            else:
                team_member = {
                    'first_name': fn,
                    'last_name': ln,
                    'email': email,
                }
                teams[tn].append(team_member)
        return teams


