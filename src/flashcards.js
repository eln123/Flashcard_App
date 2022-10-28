let cards = [
  {
    questionNum: 1,
    question: "The following statement is correct:",
    possibleAnswers: [
      "A production-grade database must support ACID transactions",
      "A simple in-memory cache can guarantee persistence of data",
      "Idempotent operations aren't problematic in a Pub/Sub system",
      "A system that has one hour of scheduled maintenance every week can offer 5 nines of availability",
    ],
    answer: ["Idempotent operations aren't problematic in a Pub/Sub system"],
    side: true,
  },
  {
    questionNum: 2,
    question: "The following pair is an outlier among the rest:",
    possibleAnswers: [
      "Peer-to-peer network | throughput",
      "Caching | latency",
      "Replication | redundancy",
      "Polling | availability",
    ],
    answer: ["Polling | availability"],
    side: true,
  },
  {
    questionNum: 3,
    question:
      "The following are scenarios that could realistically introduce a hot spot in a system (check all that apply):",
    possibleAnswers: [
      "A system's load balancer uses a round-robin server-selection strategy",
      "The asynchronous replication of a system's primary database fails",
      "A new social-media trend encourages everyone named 'Alex' or 'Alexa' to tweet 'Hello World!'",
      "The system gets a sudden surge of traffic from a particular region in the world",
    ],
    answer: [
      "A new social-media trend encourages everyone named 'Alex' or 'Alexa' to tweet 'Hello World!'",
      "The system gets a sudden surge of traffic from a particular region in the world",
    ],
    side: true,
  },
  {
    questionNum: 4,
    question:
      "If you wanted to minimize latency in a system, you would want to do the following (check all that apply):",
    possibleAnswers: [
      "Move system servers closer to clients",
      "Maximize cache hits",
      "Route network requests through multiple proxies",
      "Read data from persistent storage instead of from memory",
    ],
    answer: ["Move system servers closer to clients", "Maximize cache hits"],
    side: true,
  },
  {
    questionNum: 5,
    question: "The following statement is correct:",
    possibleAnswers: [
      "A database index greatly speeds up writes to a database",
      "An eventually consistent database might return stale data on reads",
      "All key-value stores are strongly consistent",
      "Writing data to disk is synonymous with writing data to memory",
    ],
    answer: [
      "An eventually consistent database might return stale data on reads",
    ],
    side: true,
  },
  {
    questionNum: 6,
    question:
      "The following are common server-selection strategies for load balancers (check all that apply):",
    possibleAnswers: [
      "Client-IP-based",
      "Server-health-based",
      "Compliance-based",
      "Round-robin",
    ],
    answer: ["Client-IP-based", "Server-health-based", "Round-robin"],
    side: true,
  },
  {
    questionNum: 7,
    question: "The following are correct (check all that apply):",
    possibleAnswers: [
      "Without proper defense, an entire system can be taken down by DoS attack",
      "You can implement your own simple rate-limiting service fairly easily with a key-value store",
      "Standard DDoS attacks are easily preventable with rate limiting",
      "Redundant systems are immune to DoS attacks",
    ],
    answer: [
      "Without proper defense, an entire system can be taken down by DoS attack",
      "You can implement your own simple rate-limiting service fairly easily with a key-value store",
    ],
    side: true,
  },
  {
    questionNum: 8,
    question:
      "The following API endpoint makes the most sense to be rate-limited",
    possibleAnswers: [
      "An endpoint to purchase a product",
      "An endpoint to delete an entity",
      "An endpoint to post a comment",
      "An endpoint to log into a service",
    ],
    answer: ["An endpoint to post a comment"],
    side: true,
  },
  {
    questionNum: 9,
    question:
      "The following are actual types of databases (check all that apply):",
    possibleAnswers: [
      "Graph database",
      "Time series database",
      "Moving database",
      "Primitive database",
    ],
    answer: ["Graph database", "Time series database"],
    side: true,
  },
  {
    questionNum: 10,
    question:
      "The following features lend themselves well to streaming (check all that apply):",
    possibleAnswers: [
      "Browsing through products on Amazon",
      "Sending and receiving messages on Slack",
      "Wathcing videos on YouTube",
      "Running code on AlgoExpert",
    ],
    answer: [
      "Sending and receiving messages on Slack",
      "Watching videos on Youtube",
    ],
    side: true,
  },
  {
    questionNum: 11,
    question:
      "Google Cloud Storage (GCS) and Amazon S3 are both storage solutions best used to store:",
    possibleAnswers: [
      "Large, unstructured data",
      "Encrypted data",
      "Tabular-like, structured data",
      "Time-series data",
    ],
    answer: ["Large, unstructured data"],
    side: true,
  },
  {
    questionNum: 12,
    question: "The following statements are correct(check all that apply):",
    possibleAnswers: [
      "SLA stands for service-level agreement",
      "An SLA must guarantee at least 3 nines of availability",
      "SLO stands for service-level objective",
      "SLAs are made up of one or multiple SLOs",
    ],
    answer: [
      "SLA stands for service-level agreement",

      "SLO stands for service-level objective",
      "SLAs are made up of one or multiple SLOs",
    ],
    side: true,
  },
  {
    questionNum: 13,
    question:
      "Pub/Sub systems typically come with the following guarantees (check all that apply):",
    possibleAnswers: [
      "At-least-once delivery of messages",
      "Ordering of messages",
      "Encryption of messages",
      "Replayability of messages",
    ],
    answer: [
      "At-least-once delivery of messages",
      "Ordering of messages",

      "Replayability of messages",
    ],
    side: true,
  },
  {
    questionNum: 14,
    question: "The following statement is correct:",
    possibleAnswers: [
      "With asymmetric encryption, the private key is used to encrypt data and the public key is used to decrpt it",
      "With asymmetric encryption, the same key is used to both encrypt and decrypt data",
      "With symmetric encryption, the public key is used to encrypt data and the private key is used to decrypt it",
      "With symmetric encryption, the same key is used to both encrypt and decrypt data",
    ],
    answer: [
      "At-least-once delivery of messages",
      "Ordering of messages",

      "Replayability of messages",
    ],
    side: true,
  },
  {
    questionNum: 15,
    question:
      "You're designing Facebook News Feed--specifically, the system that handles sharing new posts on relevant people's news feeds in real time. You're most likely to support this funcitonality by using:",
    possibleAnswers: [
      "A blob store",
      "A MapReduce job",
      "A Pub/Sub pipeline",
      "A peer-to-peer network",
    ],
    answer: ["A Pub/Sub pipeline"],
    side: true,
  },
  {
    questionNum: 16,
    question:
      "You're designing a stock-trading platform where users need to get immediate stock-price updates as well as immediate feedback that their trades have been executed. You want the system to have especially low:",
    possibleAnswers: ["Latency"],
    answer: ["A Pub/Sub pipeline"],
    side: true,
  },
  {
    questionNum: 17,
    question: "A typical TLS handshake can be best summarized as:",
    possibleAnswers: [
      "Generating a public/private-key pair, to be used by the server to encrypt sensitive responses and by the client to decrypt them",
      "Signing an SSL certificate in an effort to ensure the trustworthiness of the server",
      "Multiple requests sent by both the client and the server that need to be acknowledged in order to establish a stable connection",
      "Generating symmetric-encryption session keys, to be used by both the server and the client to encrypt and decrypt future communications",
    ],
    answer: [
      "Generating symmetric-encryption session keys, to be used by both the server and the client to encrypt and decrypt future communications",
    ],
    side: true,
  },
  {
    questionNum: 18,
    question:
      "The following is often used as an index for spatial data that needs to be queried with low latency:",
    possibleAnswers: ["A geofence", "A SQL database", "A shard", "A quadtree"],
    answer: ["A quadtree"],
    side: true,
  },
  {
    questionNum: 19,
    question:
      "The following are examples of idempotent operations (check all that apply):",
    possibleAnswers: [
      "Making a Slack channel private",
      "Updating a phone number in a bank account",
      "Unsubscribing from a email list",
      "Marking an email as read",
    ],
    answer: [
      "Making a Slack channel private",
      "Updating a phone number in a bank account",
      "Unsubscribing from a email list",
      "Marking an email as read",
    ],
    side: true,
  },
  {
    questionNum: 20,
    question:
      "The following are examples of peer-to-peer systems (check all that apply):",
    possibleAnswers: [
      "They're more secure than their centralized counterparts",
      "They remove throughput bottlenecks that centralized solutions have",
      "They're easier to debug than their centralized counterparts",
      "They're able to use a lot more of a network's bandwidth",
    ],
    answer: [
      "They remove throughput bottlenecks that centralized solutions have",
      "They're able to use a lot more of a network's bandwidth",
    ],
    side: true,
  },
  {
    questionNum: 21,
    question: "The following are three primary entities in a SQL database:",
    possibleAnswers: [
      "Tables, rows, and indices",
      "Tables, rows, and columns",
      "Shards, tables, and rows",
      "Clusters, shards, and tables",
    ],
    answer: ["Tables, rows, and columns"],
    side: true,
  },
  {
    questionNum: 22,
    question:
      "The following are realistic examples of config (check all that apply):",
    possibleAnswers: [
      "locations: - us-central-1, - europe-west-1, - europe-west-2, restrictionsOn: true",
      "{ 'apiKey': 'HgebdkUGPkkwr1148jD', 'displayAccountExpiration': true, 'expirationDate': '2020=09-15T00:00:00Z', 'updatedPollInterval': 100000 }",
      "##Changing Parameters__ If you're changing a parameter, make sure to contact teh appropriate feature owner first. You can find feature-owner contact information above each parameter. If no contact information is present, you don't have to contact anyone.",
      "const allowAccess = config.profileLaunched && res.code === 200; const {timeToExpire} = res.data",
    ],
    answer: [
      "locations: - us-central-1, - europe-west-1, - europe-west-2, restrictionsOn: true",
      "{ 'apiKey': 'HgebdkUGPkkwr1148jD', 'displayAccountExpiration': true, 'expirationDate': '2020=09-15T00:00:00Z', 'updatedPollInterval': 100000 }",
    ],
    side: true,
  },
  {
    questionNum: 23,
    question:
      "The following are legitmate use cases of proxies (check all that apply):",
    possibleAnswers: [
      "Masking a client's identity",
      "Caching server responses",
      "Load balancing requests across servers",
      "Logging client information",
    ],
    answer: [
      "locations: - us-central-1, - europe-west-1, - europe-west-2, restrictionsOn: true",
      "{ 'apiKey': 'HgebdkUGPkkwr1148jD', 'displayAccountExpiration': true, 'expirationDate': '2020=09-15T00:00:00Z', 'updatedPollInterval': 100000 }",
    ],
    side: true,
  },
  {
    questionNum: 24,
    question: "Consistent hashing is used to:",
    possibleAnswers: [
      "Prevent requests from being forwarded to different servers when new servers are added or when existing servers are brought down",
      "Specify what requests get forwarded to different servers when new servers are added or when existing servers are brought down",
      "Minimize the number of requests that get forwarded to different servers when new servers are added or when existing servers are brought down",
      "Maximize the number of requests that get forwarded to different servers when new servers are added or when existing servers are brought down",
    ],
    answer: [
      "Minimize the number of requests that get forwarded to different servers when new servers are added or when existing servers are brought down",
    ],
    side: true,
  },
  {
    questionNum: 25,
    question:
      "You're designing a system; the following questions are worth asking before diving in(check all that apply):",
    possibleAnswers: [
      "Are we designing this system for a global audience or a region-specific one?",
      "What kind of availability are we targeting for the various parts of the system?",
      "How many users are we designing this system for?",
      "What kind of latencies are we targeting for the various parts of this system?",
    ],
    answer: [
      "Are we designing this system for a global audience or a region-specific one?",
      "What kind of availability are we targeting for the various parts of the system?",
      "How many users are we designing this system for?",
      "What kind of latencies are we targeting for the various parts of this system?",
    ],
    side: true,
  },
  {
    questionNum: 26,
    question: "When designing an API, you should always(check all that apply):",
    possibleAnswers: [
      "Think of who will be consuming the API",
      "Limit your endpoints to either only CRUD endpoints or only non-CRUD endpoints",
      "Think of the functionality that the API needs to support",
      "Have every API endpoint return the most amount of information about the underlying data as possible",
    ],
    answer: [
      "Think of who will be consuming the API",
      "Think of the functionality that the API needs to support",
    ],
    side: true,
  },
  {
    questionNum: 27,
    question:
      "The following concepts are fake and don't exist (check all that apply)",
    possibleAnswers: [
      "Distributed denial-of-sharding attack",
      "Distributed file system",
      "Relational idempotency",
      "Rendezvous caching",
    ],
    answer: [
      "Distributed denial-of-sharding attack",

      "Relational idempotency",
      "Rendezvous caching",
    ],
    side: true,
  },
  {
    questionNum: 28,
    question:
      "You would likely want to use cache in the following systems-design scenarios(check all that apply):",
    possibleAnswers: [
      "Users accessing code they've written for questions on AlgoExpert",
      "Users accessing their saved credit-card information on Amazon",
      "Users accessing articles on an online-newspaper website",
      "Users accessing static content on the home page of a website",
    ],
    answer: [],
    side: true,
  },
  {
    questionNum: 29,
    question: "Caching is less likely to be advisable if:",
    possibleAnswers: [
      "You want to speed up requests in a system",
      "Accessed data is frequently updated",
      "You want to minimize reads from a database",
      "A system has a lot of users who are accessing the same data",
    ],
    answer: ["Accessed data is frequently updated"],
    side: true,
  },
  {
    questionNum: 30,
    question: "The following operations are ordered from fastest to slowest:",
    possibleAnswers: [
      "Doing an Inter-Continental Round Trip < Transferring 1MB over Network < Reading 1 MB from SSD < Reading 1MB from RAM",
      "Reading 1MB from RAM < Transferring 1MB over Network < Doing an Inter-Continental Round Trip < Reading 1MB from SSD",
      "Reading 1 MB from SSD < Reading 1 MB from RAM < Transferring 1MB over Network < Doing an inter-continental",
      "Reading 1 MB from RAM < Reading 1 MB from SSD < Transferring 1MB over Network < Doing an inter-continental",
    ],
    answer: [
      "Reading 1 MB from RAM < Reading 1 MB from SSD < Transferring 1MB over Network < Doing an inter-continental",
    ],
    side: true,
  },
  {
    questionNum: 31,
    question: "A man-in-the-middle attack is:",
    possibleAnswers: [
      "An attack where the attacker secretly intercepts communications between two parties",
      "An attack that exploits a vulnerability in a victim's private key, allowing the attacker to read encrypted messages in the middle of their transmission victim",
      "An attack where the attacker hijacks an ACID transaction while it's being executed",
      "A type of DDoS attack where malicious traffic is intercepted, amplified, and forwarded to its original destination",
    ],
    answer: [],
    side: true,
  },
  {
    questionNum: 32,
    question:
      "The following technologies are key-value stores (check all that apply):",
    possibleAnswers: ["ZooKeeper", "Hadoop", "Etcd", "Redis"],
    answer: ["ZooKeeper", "Etcd", "Redis"],
    side: true,
  },
  {
    questionNum: 33,
    question: "The following is a popular use case for a peer-to-peer network",
    possibleAnswers: [
      "Quickly finding a faulty machine in a collection of thousands of machines",
      "Sending a large file to thousands of machines at once",
      "Repeatedly sending arbitrary network requests to thousands of machines at once",
      "Authenticating thousands of machines at once",
    ],
    answer: ["Sending a large file to thousands of machines at once"],
    side: true,
  },
  {
    questionNum: 34,
    question:
      "The following technologies are storage solutions (check all that apply):",
    possibleAnswers: ["NginX", "Prometheus", "Neo4j", "MySQL"],
    answer: ["Prometheus", "Neo4j", "MySQL"],
    side: true,
  },
  {
    questionNum: 35,
    question: "The following system is most likely to be highly available:",
    possibleAnswers: [
      "A messaging system used by air traffic controllers to communicate with pilots while they're in flight",
      "An internal tool at a company, allowing employees to check their available vacation days",
      "A popular online video game",
      "An online dashboard for businesses to check their financials (sales, revenue, etc.)",
    ],
    answer: [
      "A messaging system used by air traffic controllers to communicate with pilots while they're in flight",
    ],
    side: true,
  },
  {
    questionNum: 36,
    question:
      "Leader election is used in systems to achieve the following goal:",
    possibleAnswers: [
      "High throughput",
      "High availability",
      "Consistent hashing",
      "Low latency",
    ],
    answer: ["High availability"],
    side: true,
  },
  {
    questionNum: 37,
    question: "The following statement is correct:",
    possibleAnswers: [
      "Hitting the same API endpoint every ten minutes is an example of polling",
      "A reverse proxy is a special type of load balancer",
      "High throughput guarantees low latency",
      "A blob store is a SQL database",
    ],
    answer: [
      "Hitting the same API endpoint every ten minutes is an example of polling",
    ],
    side: true,
  },
  {
    questionNum: 38,
    question:
      "The following functionality is not typically supported in a standard CRUD API:",
    possibleAnswers: ["Create", "Get", "Move", "List"],
    answer: ["Move"],
    side: true,
  },
  {
    questionNum: 39,
    question: "A hot spot can occur in a system when (check all that apply):",
    possibleAnswers: [
      "The system's workload is naturally skewed",
      "The system's primary database isn't replicated",
      "A hashing function for a set of destination servers is suboptimal",
      "A sharding key for a set of databases is suboptimal",
    ],
    answer: [
      "The system's workload is naturally skewed",

      "A hashing function for a set of destination servers is suboptimal",
      "A sharding key for a set of databases is suboptimal",
    ],
    side: true,
  },
  {
    questionNum: 40,
    question:
      "When designing an API endpoint to list some arbitrary entities, like comments on a video or posts on a news feed, you typically want the endpoint to support:",
    possibleAnswers: [
      "Obfuscation",
      "Deletion",
      "Pagination",
      "Authentication",
    ],
    answer: ["Pagination"],
    side: true,
  },
  {
    questionNum: 41,
    question:
      "An asynchronous MapReduce job would likely be used to (check all that apply):",
    possibleAnswers: [
      "Find the most commonly-occuring errors in a web application",
      "List all hotels with availabilities in a given region",
      "Determine which strings a LinkedIn post contains out of a given list of strings",
      "Aggregate North-American YouTube-channel view counts",
    ],
    answer: [
      "Find the most commonly-occuring errors in a web application",

      "Aggregate North-American YouTube-channel view counts",
    ],
    side: true,
  },
  {
    questionNum: 42,
    question: "The following is an example of load balancing software:",
    possibleAnswers: ["ZooKeeper", "S3", "NginX", "Redis"],
    answer: ["NginX"],
    side: true,
  },
  {
    questionNum: 43,
    question:
      "The following are all real acronyms in the field of systems design (check all that apply):",
    possibleAnswers: [
      "CDN, SQL, DNS, and IP",
      "TCP, SLO, S3, and HDFS",
      "DoS, YAML, PoP, and RAM",
      "GCS, LTM, HTTP, and ACID",
    ],
    answer: [
      "CDN, SQL, DNS, and IP",
      "TCP, SLO, S3, and HDFS",
      "DoS, YAML, PoP, and RAM",
    ],
    side: true,
  },
  {
    questionNum: 44,
    question:
      "THe following are reasons to replicate a database in a system(check all that apply):",
    possibleAnswers: [
      "To load balance the system",
      "To move data closer to a set of clients so as to improve the latency for those clients",
      "To make the system more fault-tolerant",
      "To add a layer of caching to the system",
    ],
    answer: [
      "To move data closer to a set of clients so as to improve the latency for those clients",
      "To make the system more fault-tolerant",
    ],
    side: true,
  },
  {
    questionNum: 45,
    question:
      "You're designing a chat application like WhatsApp. You're most likely to have the following things in this system (check all that apply):",
    possibleAnswers: [
      "A persistent storage solution to store all historical messages",
      "A Pub/Sub system to send and receive messages and read-receipts",
      "A peer-to-peer network for fast message delivery",
      "One or multiple load balancers to handle read and write requests of messages",
    ],
    answer: [
      "A persistent storage solution to store all historical messages",
      "A Pub/Sub system to send and receive messages and read-receipts",

      "One or multiple load balancers to handle read and write requests of messages",
    ],
    side: true,
  },
  {
    questionNum: 46,
    question:
      "The following are typically decent sharding strategies (check all that apply):",
    possibleAnswers: [
      "Sharding based on the time at which data is being stored",
      "Sharding based on a customer's username",
      "Sharding based on the type of data being stored",
      "Sharding based on a client's region",
    ],
    answer: [
      "Sharding based on a customer's username",
      "Sharding based on the type of data being stored",
      "Sharding based on a client's region",
    ],
    side: true,
  },
  {
    questionNum: 47,
    question: "The following statements are correct (check all that apply)",
    possibleAnswers: [
      "Neo4j and Postgres are SQL databases",
      "Kafka and Hadoop are Pub/Sub technologies",
      "Etcd and ZooKeeper are key-value stores",
      "Paxos and Raft are consensus algorithms",
    ],
    answer: [
      "Etcd and ZooKeeper are key-value stores",
      "Paxos and Raft are consensus algorithms",
    ],
    side: true,
  },
  {
    questionNum: 48,
    question: "The following statements are correct (check all that apply):",
    possibleAnswers: [
      "HTTP is a network protocol built on top of TCP",
      "Most modern-day machines communicate with each other over IP",
      "HTTP is a network protocol that exposes a more human-readable interface than those exposed by protocols like TCP and IP",
      "TCP is a network protocol built on top of IP",
    ],
    answer: [],
    side: true,
  },
  {
    questionNum: 49,
    question:
      "You're designing Dropbox, a service that allows users to store 'primary' data like video files, images, text documents, etc., as well as metadata about the primary data like how large the data is, who uploaded it, when it was last edited, etc.. You're most likely to use the following storage solutions to store the primary data and its accompanying metadata:",
    possibleAnswers: [
      "A SQL database for both the primary data and the metadata",
      "A blob store for the primary data and a key-value store for the metadata",
      "A key-value store for the primary data and a blog store for the metadata",
      "A SQL database for the primary data and a blob store for the metadata",
    ],
    answer: [
      "A blob store for the primary data and a key-value store for the metadata",
    ],
    side: true,
  },
  {
    questionNum: 50,
    question: "The following is an example of horizontal scaling:",
    possibleAnswers: [
      "Increasing a computer's RAM to speed up some computations",
      "Replacing a server on a scheduled interval to minimize downtime",
      "Load balancing requests across database servers based on their hash to maximize intermediary cache hits",
      "Increasing the number of machines performing a task to improve throughput",
    ],
    answer: [
      "Increasing the number of machines performing a task to improve throughput",
    ],
    side: true,
  },
];

export default cards;
