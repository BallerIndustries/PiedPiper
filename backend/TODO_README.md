# This account will be used to store the smart contract for the todo
cleos create key
cleos create key

# TODO Key 1
Private key: 5J6fnhgoSjmb4ojdVUNErbLpWCxub5kbooDwvxA75o8Scr1hFfK
Public key: EOS7kCe1oNbCzRE1fcPgNHwTaezmSypmGdTf2kPVS5wQREjSmA5Ro

# TODO Key 2
Private key: 5JE3me45HErQh2qDAoVeoj3TH8pLVajEkGNtBUaZk4mhX3sATU4
Public key: EOS6hqnZETUaDkmHS74XcphRte8BWU76svrec3xCCXkBueqfCSDs8

cleos wallet import 5J6fnhgoSjmb4ojdVUNErbLpWCxub5kbooDwvxA75o8Scr1hFfK
cleos wallet import 5JE3me45HErQh2qDAoVeoj3TH8pLVajEkGNtBUaZk4mhX3sATU4

cleos create account eosio todo PUBLICKEY1 PUBLICKEY2
# cleos create account eosio todo EOS7kCe1oNbCzRE1fcPgNHwTaezmSypmGdTf2kPVS5wQREjSmA5Ro EOS6hqnZETUaDkmHS74XcphRte8BWU76svrec3xCCXkBueqfCSDs8

eosiocpp -o /work/todo/todo.wast /work/todo/todo.cpp
eosiocpp -g /work/todo/todo.abi /work/todo/todo.cpp
cleos set contract todo /work/todo -p todo