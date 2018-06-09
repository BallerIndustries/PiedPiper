# Set the aliases
cleos='docker exec eosio /opt/eosio/bin/cleos --wallet-url http://localhost:8888'
eosiocpp='docker exec eosio eosiocpp'

# Unlock the wallet
$cleos wallet open
$cleos wallet unlock --password PW5JnHFdSymgWr7dGGq32zSJNuD1uXEARXExN4JdGh1ao1YTsTbfA

# Copy code into the magical folder
mkdir /tmp/work/hackathon/
cp company.cpp /tmp/work/hackathon/company.cpp

# Compile the code
$eosiocpp -o /work/hackathon/hackathon.wast /work/hackathon/company.cpp
$eosiocpp -g /work/hackathon/hackathon.abi /work/hackathon/company.cpp

# Upload the WASM contract
$cleos set contract hackathon /work/hackathon/ --permission hackathon