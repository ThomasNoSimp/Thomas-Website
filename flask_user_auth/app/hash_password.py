from flask_bcrypt import Bcrypt

bcrypt = Bcrypt()

# Replace 'actual_password' with the password you want to hash
password_to_hash = 'thomas28@'

# Hash the password
hashed_password = bcrypt.generate_password_hash(password_to_hash).decode('utf-8')

# Print or store the hashed password
print(hashed_password)
