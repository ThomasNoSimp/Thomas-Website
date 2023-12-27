import bcrypt

def hash_password(password):
    salt = bcrypt.gensalt()
    hashed_password = bcrypt.hashpw(password.encode('utf-8'), salt)
    return hashed_password, salt

def verify_password(entered_password, stored_hashed_password, salt):
    hashed_password_to_check = bcrypt.hashpw(entered_password.encode('utf-8'), salt)
    return hashed_password_to_check == stored_hashed_password
