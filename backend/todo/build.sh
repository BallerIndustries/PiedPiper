cleos='docker exec eosio /opt/eosio/bin/cleos --wallet-url http://localhost:8888'
eosiocpp='docker exec eosio eosiocpp'

# Unlock the wallet
$cleos wallet open
$cleos wallet unlock --password PW5JnHFdSymgWr7dGGq32zSJNuD1uXEARXExN4JdGh1ao1YTsTbfA

# Copy code into the magical folder
cp todo.cpp /tmp/work/todo/todo.cpp

# Compile the code
$eosiocpp -o /work/todo/todo.wasm /work/todo/todo.cpp
$eosiocpp -g /work/todo/todo.abi /work/todo/todo.cpp

# Upload the WASM contract
$cleos set contract todo /work/todo -p todo