from utils import hash_password, verify_password

user_password = "user123"
hashed_password, salt = hash_password(user_password)

# Store hashed_password and salt in the database
# ... (database storage logic here)

entered_password = "user123"
is_password_valid = verify_password(entered_password, stored_hashed_password_from_database, stored_salt_from_database)

if is_password_valid:
    print("Login successful!")
else:
    print("Invalid password.")
