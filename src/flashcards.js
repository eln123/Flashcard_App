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
];

export default cards;
