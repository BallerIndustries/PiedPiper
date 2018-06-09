#include <eosiolib/eosio.hpp>
#include <eosiolib/print.hpp>

class company_contract : public eosio::contract {
public:
    company_contract(account_name self)
            :eosio::contract(self),
             companies(_self, _self)
    {}


    //cleos push action hackathon create '["hackathon", 1, "Angus", "email", "finance"]' -p hackathon

    /// @abi action
    void create(account_name author,
                const int64_t id,
                const std::string& name,
                const std::string& email,
                const std::string& industry) {
        companies.emplace(author, [&](auto& new_company) {
            new_company.id = id;
            new_company.name = name;
            new_company.email = email;
            new_company.industry = industry;
        });

        eosio::print("company#", id, " created  ");
    }

private:
    /// @abi table companies i64
    struct company {
        uint64_t id;
        std::string name;
        std::string email;
        std::string industry;

        uint64_t primary_key() const { return id; }
        EOSLIB_SERIALIZE(company, (id)(name)(email)(industry))
    };

    typedef eosio::multi_index<N(companies), company> company_table;
    company_table companies;
};

EOSIO_ABI(company_contract, (create))