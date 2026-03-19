import Time "mo:core/Time";
import Principal "mo:core/Principal";
import Map "mo:core/Map";
import Array "mo:core/Array";
import Order "mo:core/Order";
import Int "mo:core/Int";
import Runtime "mo:core/Runtime";

actor {
  let submissions = Map.empty<Principal, [Submission]>();

  public type Submission = {
    name : Text;
    email : Text;
    brand : Text;
    message : Text;
    timestamp : Time.Time;
  };

  module Submission {
    public func compare(submission1 : Submission, submission2 : Submission) : Order.Order {
      Int.compare(submission1.timestamp, submission2.timestamp);
    };
  };

  public shared ({ caller }) func submitInquiry(name : Text, email : Text, brand : Text, message : Text) : async () {
    let newSubmission : Submission = {
      name;
      email;
      brand;
      message;
      timestamp = Time.now();
    };

    let existing = switch (submissions.get(caller)) {
      case (null) { [] };
      case (?existing) { existing };
    };

    submissions.add(caller, existing.concat([newSubmission]));
  };

  public query ({ caller }) func getAllSubmissions() : async [Submission] {
    if (submissions.isEmpty()) {
      Runtime.trap("No submissions found");
    };
    submissions.values().toArray().flatten().sort();
  };
};
