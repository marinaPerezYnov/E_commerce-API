import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { jwtConstants } from '../constantes';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    /**
     *  jwtFromRequest fournit la méthode par laquelle le JWT sera extrait du Request
     *  ignoreExpiration délègue la responsabilité de s'assurer qu'un JWT n'a pas expiré au module Passport
     *  secretOrKey fournir un secret symétrique pour signer le jeton
     */
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
    });
  }

  async validate(payload: any) {
    return { userId: payload.sub, username: payload.username };
  }
}
