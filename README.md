### A simple Auth Workflow Involving the Use of express Sessions and Using Cookies to pass SessionIDs

- `Redis`: This Database was used to store Session Ids whenever they are Created, due to its fast lookup.
- `Mongo`: Used to store Persistent Data such as the user Login Info

### Env Variables needed to Run this Applicaton.

- `REDIS_HOST` =xxxxxxxxxxxxxxxxxxxx.redis-cloud.com'

- `REDIS_PASS`

- `REDIS_PORT`

- `MONGODB_URI`

- `PORT`

- `REDIS_SECRET`