--
-- PostgreSQL database dump
--

-- Dumped from database version 14.4 (Ubuntu 14.4-1.pgdg20.04+1)
-- Dumped by pg_dump version 14.4 (Ubuntu 14.4-1.pgdg20.04+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: heroku_ext; Type: SCHEMA; Schema: -; Owner: u10hin7v198da6
--

CREATE SCHEMA heroku_ext;


ALTER SCHEMA heroku_ext OWNER TO u10hin7v198da6;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: session; Type: TABLE; Schema: public; Owner: ddnxwylqcpjcod
--

CREATE TABLE public.session (
    id integer NOT NULL,
    "userId" integer NOT NULL,
    token text
);


ALTER TABLE public.session OWNER TO ddnxwylqcpjcod;

--
-- Name: session_id_seq; Type: SEQUENCE; Schema: public; Owner: ddnxwylqcpjcod
--

CREATE SEQUENCE public.session_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.session_id_seq OWNER TO ddnxwylqcpjcod;

--
-- Name: session_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: ddnxwylqcpjcod
--

ALTER SEQUENCE public.session_id_seq OWNED BY public.session.id;


--
-- Name: urls; Type: TABLE; Schema: public; Owner: ddnxwylqcpjcod
--

CREATE TABLE public.urls (
    id integer NOT NULL,
    url text NOT NULL,
    "urlToken" text NOT NULL,
    "userId" integer NOT NULL,
    view integer DEFAULT 0 NOT NULL
);


ALTER TABLE public.urls OWNER TO ddnxwylqcpjcod;

--
-- Name: urls_id_seq; Type: SEQUENCE; Schema: public; Owner: ddnxwylqcpjcod
--

CREATE SEQUENCE public.urls_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.urls_id_seq OWNER TO ddnxwylqcpjcod;

--
-- Name: urls_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: ddnxwylqcpjcod
--

ALTER SEQUENCE public.urls_id_seq OWNED BY public.urls.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: ddnxwylqcpjcod
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name text NOT NULL,
    email text NOT NULL,
    password text NOT NULL
);


ALTER TABLE public.users OWNER TO ddnxwylqcpjcod;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: ddnxwylqcpjcod
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO ddnxwylqcpjcod;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: ddnxwylqcpjcod
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: session id; Type: DEFAULT; Schema: public; Owner: ddnxwylqcpjcod
--

ALTER TABLE ONLY public.session ALTER COLUMN id SET DEFAULT nextval('public.session_id_seq'::regclass);


--
-- Name: urls id; Type: DEFAULT; Schema: public; Owner: ddnxwylqcpjcod
--

ALTER TABLE ONLY public.urls ALTER COLUMN id SET DEFAULT nextval('public.urls_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: ddnxwylqcpjcod
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: session; Type: TABLE DATA; Schema: public; Owner: ddnxwylqcpjcod
--

COPY public.session (id, "userId", token) FROM stdin;
38	47	259f1269-d6e8-4061-b0a0-69e9886eadc6
40	49	7abb283e-61e6-4542-ab6d-e138966a0e11
39	48	4c8f235f-63c4-4522-8a32-18e1b51cb92e
\.


--
-- Data for Name: urls; Type: TABLE DATA; Schema: public; Owner: ddnxwylqcpjcod
--

COPY public.urls (id, url, "urlToken", "userId", view) FROM stdin;
8	https://instagram22.com	IdelJYIVEL_3TR6Zm2F3O	47	0
10	https://google1.com	-K8s2Ig-jURl_--Drg4yc	49	0
6	https://instagram.com	eIU2ISaJIxClTjkk4ZEoU	47	3
7	https://instagram15.com	9x0utSBgqodcE_sovX4UE	47	2
9	https://google.com	dyYBk29BGtpRni3LgkX4I	49	1
11	https://testinho.com	me5VmqLjW5Rq53TFMRtOU	48	0
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: ddnxwylqcpjcod
--

COPY public.users (id, name, email, password) FROM stdin;
47	Say	say.linda@gmail.com	$2b$10$rTtDV1UbwA90Yq5Jg3gFtu0u.eQ8dj7zl1Z9lkvYF8PCVYpDU4mGe
48	Igor	igor@driven.com.br	$2b$10$7sa4k3Z8c6LdGNwiXDgHCOLaOn8dhA9FilQlIaPgJDhdpsgvGAFAy
49	Igor2	igor2@driven.com.br	$2b$10$XHRXzX4j09VfKuCo82W8uOyEegscD95Clgv7/9kZ91Kehx5xYIAsq
\.


--
-- Name: session_id_seq; Type: SEQUENCE SET; Schema: public; Owner: ddnxwylqcpjcod
--

SELECT pg_catalog.setval('public.session_id_seq', 40, true);


--
-- Name: urls_id_seq; Type: SEQUENCE SET; Schema: public; Owner: ddnxwylqcpjcod
--

SELECT pg_catalog.setval('public.urls_id_seq', 11, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: ddnxwylqcpjcod
--

SELECT pg_catalog.setval('public.users_id_seq', 49, true);


--
-- Name: session session_pkey; Type: CONSTRAINT; Schema: public; Owner: ddnxwylqcpjcod
--

ALTER TABLE ONLY public.session
    ADD CONSTRAINT session_pkey PRIMARY KEY (id);


--
-- Name: urls urls_pkey; Type: CONSTRAINT; Schema: public; Owner: ddnxwylqcpjcod
--

ALTER TABLE ONLY public.urls
    ADD CONSTRAINT urls_pkey PRIMARY KEY (id);


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: ddnxwylqcpjcod
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: ddnxwylqcpjcod
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: urls urls_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: ddnxwylqcpjcod
--

ALTER TABLE ONLY public.urls
    ADD CONSTRAINT "urls_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- Name: SCHEMA heroku_ext; Type: ACL; Schema: -; Owner: u10hin7v198da6
--

GRANT USAGE ON SCHEMA heroku_ext TO ddnxwylqcpjcod;


--
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: ddnxwylqcpjcod
--

REVOKE ALL ON SCHEMA public FROM postgres;
REVOKE ALL ON SCHEMA public FROM PUBLIC;
GRANT ALL ON SCHEMA public TO ddnxwylqcpjcod;
GRANT ALL ON SCHEMA public TO PUBLIC;


--
-- Name: LANGUAGE plpgsql; Type: ACL; Schema: -; Owner: postgres
--

GRANT ALL ON LANGUAGE plpgsql TO ddnxwylqcpjcod;


--
-- PostgreSQL database dump complete
--

