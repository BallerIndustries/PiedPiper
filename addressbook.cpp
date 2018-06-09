#include <eosiolib/eosio.hpp>
#include <eosiolib/print.hpp>
using namespace eosio;

class addressbook : public eosio::contract {
  public:
      addressbook(account_name s):
        contract(s), // initialization of the base class for the contract
        _people(s, s) // initialize the table with code and scope NB! Look up definition of code and scope
      {
      }

      /// @abi action
      void create(account_name username, uint64_t ssn, const std::string& fullname, uint64_t age) {
        require_auth(username);
        // Let's make sure the primary key doesn't exist
        // _people.end() is in a way similar to null and it means that the value isn't found
        eosio_assert(_people.find(ssn) == _people.end(), "This SSN already exists in the addressbook");
        _people.emplace(get_self(), [&]( auto& p ) {
           p.ssn = ssn;
           p.fullname = fullname;
           p.age = age;
        });
      } 

  private: 
    // Setup the struct that represents the row in the table
    /// @abi table people
    struct person {
      uint64_t ssn; // primary key, social security number
      std::string fullname;
      uint64_t age;

      uint64_t primary_key()const { return ssn; }
      uint64_t by_age()const { return age; }
    };

    // We setup the table:
    /// @abi table
    typedef eosio::multi_index< N(people), person, indexed_by<N(byage), const_mem_fun<person, uint64_t, &person::by_age>>>  people;

    people _people;

};

 EOSIO_ABI( addressbook, (create) )