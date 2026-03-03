import Text "mo:core/Text";
import List "mo:core/List";
import Int "mo:core/Int";
import Time "mo:core/Time";

actor {
  type ContactSubmission = {
    id : Nat;
    name : Text;
    companyName : Text;
    email : Text;
    phone : Text;
    requirement : Text;
    timestamp : Time.Time;
  };

  let submissions = List.empty<ContactSubmission>();
  var nextId = 0;

  public shared ({ caller }) func submitContactForm(
    name : Text,
    companyName : Text,
    email : Text,
    phone : Text,
    requirement : Text,
  ) : async Bool {
    if (name.size() == 0 or companyName.size() == 0 or email.size() == 0 or phone.size() == 0 or requirement.size() == 0) {
      return false;
    };

    let newSubmission : ContactSubmission = {
      id = nextId;
      name;
      companyName;
      email;
      phone;
      requirement;
      timestamp = Time.now();
    };

    submissions.add(newSubmission);
    nextId += 1;
    true;
  };

  public query ({ caller }) func getAllSubmissions() : async [ContactSubmission] {
    submissions.toArray();
  };

  public query ({ caller }) func getSubmissionById(id : Nat) : async ?ContactSubmission {
    submissions.find(func(submission) { submission.id == id });
  };

  public query ({ caller }) func getSubmissionCount() : async Nat {
    submissions.size();
  };
};
